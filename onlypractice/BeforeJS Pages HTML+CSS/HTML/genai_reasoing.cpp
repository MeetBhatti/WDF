#include<iostream>
using namespace std;

struct data{
    int student_id;
    char fooditem[20];
    char day[10];
    int time;
    int rating;
    int price;
};
int main()
{
    int no;
    cout<<"Enter the number of students:";
    cin>>no;
    struct data d[no];


    for(int i=0;i<no;i++)
    {
        cout<<"Enter student id:";
             cin>>d[i].student_id;
             cout<<"Enter food item: ";
             cin>>d[i].fooditem;

             cout<<"Enter day:";
             cin>>d[i].day;
             cout<<"Enter time:";   
    }
}