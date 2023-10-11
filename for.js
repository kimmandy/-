/*for(var i =0; i<5; i++)
{
    console.log("javascript");
}*/

/*var sum =0;
for(var i =1; i<11; i++)
{
    sum =sum+i;
}
console.log(sum);*/

/*var value = 0;
while(value<10)
{
    value++;
    if(value % 2 == 0)
    {
        continue;
    }

    console.log("value의 값 : " + value);
}*/

 /* 레이블 사용 */
 var dan =2;
 outside : while(dan < 10)
 {
    var num =1;
    while(num <10){
        if(dan == 6 && num == 1)
            break outside;
        console.log(dan + '+' + num + "=" +dan*num);
        num++;

    }
    dan++;    
 }