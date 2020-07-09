/*
3 9 
0 0 1 0 0 0 0 0 1 
1 1 1 1 1 1 0 1 0 
1 0 0 1 0 0 1 0 0
*/
/*
9
*/
#include <bits/stdc++.h>
using namespace std;
//这个点没看见，调了半天，动物园里的老鼠是彼此互不相同的。小象的害怕值定义为他回家的路径上可以看见的不同的老鼠的数量。！！！
const int maxn=1000+10;
const int INF=0x3f3f3f3f;
int dp[maxn][maxn][3];//0从左方转移，1从上边转移
int a[maxn][maxn];
int main(){
	memset(dp,INF,sizeof(dp));
	int n,m; cin>>n>>m;
	for(int i=1;i<=n;i++)
		for(int j=1;j<=m;j++)
			cin>>a[i][j];
	dp[1][1][1]=a[1][1]+a[1][2]+a[2][1];//自己家里的+下方的+右边的
	dp[1][1][0]=a[1][1]+a[1][2]+a[2][1];
	for(int i=1;i<=n;i++)
		for(int j=1;j<=m;j++){
			if(i==1)
				dp[i][j][0]=min(dp[i][j-1][1],dp[i][j-1][0]) + a[i+1][j]+a[i][j+1];
			else if(j==1)
	            dp[i][j][1]=min(dp[i-1][j][0],dp[i-1][j][1]) + a[i+1][j]+a[i][j+1];
	        else {
            	dp[i][j][1]=min(dp[i-1][j][0],dp[i-1][j][1]+a[i][j-1]) + a[i+1][j]+a[i][j+1];//从上面转移过来
            	//如果f[i][j]的上一个点(即f[i-1][j][0])为左边即f[i-1][j-1]转移来的，那么直接转移即可，因为左边f[i][j-1]这种老鼠已经见过了，画图理解
            	//如果f[i][j]的上一个点(即f[i-1][j][1])为上边即f[i-2][j]转移来的，那么因为左边f[i][j-1]这种老鼠没见过，所以需要在加上左边f[i][j-1]这种老鼠
	            dp[i][j][0]=min(dp[i][j-1][1],dp[i][j-1][0]+a[i-1][j]) + a[i+1][j]+a[i][j+1];
	            //同上，这个点太坑了，同一种老鼠只算一次！！！
	            //动物园里的老鼠是彼此互不相同的。小象的害怕值定义为他回家的路径上可以看见的不同的老鼠的数量。！！！
			}
        }
    /*
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++)
			cout<<dp[i][j][0]<<" ";
		cout<<endl;
	}
	
	for(int i=1;i<=n;i++){
		for(int j=1;j<=m;j++)
			cout<<dp[i][j][1]<<" ";
		cout<<endl;
	}
	cout<<endl;
	*/
    return cout<<min(dp[n][m][0],dp[n][m][1])<<endl,0;
}
