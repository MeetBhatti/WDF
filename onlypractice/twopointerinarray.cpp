#include<iostream>
using namespace std;

int main()
{

    int nums[] = {6,2,8,1,9};
    int *p = &nums[0];
    int *q = &nums[4];

    while(p!=q)
    {
        int *temp = p;
        p=q;
        q=temp;
        p++;
        q--;
    }
    for(int i=0;i<5;i++)
    {
        cout<<nums[i]<<" ";
    }
}