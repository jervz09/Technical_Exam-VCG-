let firstDay=100;
let earned=0;
let days=7;
let i=1;
for(i;i<=days;i++){
   //if earned is 0 earned=100 else earned multiply by 2
   earned+=(earned===0)?firstDay:earned*2 
}
console.log(earned)
