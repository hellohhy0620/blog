/*
6 3 3 4 
1 2 5 
3 4 5 
5 6 10 
3 5 -100 
4 6 -100 
1 3 -10 
*/
/*
NO PATH 
NO PATH 
5 
0 
-95 
-100 
*/
#include<bits/stdc++.h>
using namespace std;
const int maxn=1e6+10;
const int INF=0x3f3f3f3f;
struct edge{
	int to,next,dis;
}a[maxn];
inline int read(){
	int k=0,f=1;char ch=getchar();
	for(;!isdigit(ch);ch=getchar())
		if(ch=='-')f=-1;
	for(;isdigit(ch);ch=getchar())
		k=k*10+ch-'0';
	return k*f;
}
int cnt;
int head[maxn],d[maxn];
inline void add(int x,int y,int z){a[++cnt]=(edge){y,head[x],z};head[x]=cnt;}
int inq[maxn];
inline bool spfa(int s){
	memset(d,INF,sizeof(d));
	queue<int>q;q.push(s);d[s]=0;
	while(!q.empty()){
		int u=q.front();q.pop();inq[u]=0;
		for(register int i=head[u];i;i=a[i].next){
			int v=a[i].to,dis;
			if(d[v]>(dis=d[u]+a[i].dis)){
				d[v]=dis;
				if(!inq[v]) inq[v]=1,q.push(v);
            }
        }
    }
}

int main() {
	int T,R,P,S;cin>>T>>R>>P>>S;
	for(register int i=1;i<=R;i++){
		int x=read(),y=read(),z=read();
		add(x,y,z),add(y,x,z);
	}
	for(register int i=1;i<=P;i++){
		int x=read(),y=read(),z=read();
		add(x,y,z);
	}
	spfa(S);
	for(register int i=1;i<=T;i++){
		if(d[i] < INF) cout<<d[i]<<endl;
		else puts("NO PATH");
	}
	return 0;
}
