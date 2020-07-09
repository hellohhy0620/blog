/*
2 
3 3
1 2 10
1 3 -5
3 3 -15
5 3
1 5 100
3 5 50
1 2 51
*/
/*
true
false
*/
#include <bits/stdc++.h>
using namespace std;
const int INF=0x3f3f3f3f;
const int maxn=100+10;
#define cle(a) memset(a,0,sizeof(a));
int fa[maxn],dep[maxn];
int unionsearch(int rt){
	if(fa[rt] == rt)return rt;
	int root=fa[rt];
	fa[rt]=unionsearch(fa[rt]);
	dep[rt]+=dep[root];
	return fa[rt];
}
int main(){
	int T;cin>>T;
	while(T--){
		cle(dep)cle(fa)
		int n,m;cin>>n>>m;
		for(int i=1;i<=n;i++) fa[i]=i;
		int jl=0;
		for(int i=1;i<=m;i++){
			int x,y,z;cin>>x>>y>>z;x=x-1;
			int root1=unionsearch(x);
			int root2=unionsearch(y);
			if(root1 != root2) fa[root2]=root1,dep[root2]=dep[x]-dep[y]+z;
			else if(dep[y]-dep[x]!=z){jl=1;break;}
		}
		if(jl==0)cout<<"true"<<endl;
		else cout<<"false"<<endl;
	}
	return 0;
}
