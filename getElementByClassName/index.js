// Write your code below:
// use getElementsByClassName

let fruit=document.getElementsByClassName("fruit");
fruit[2].style.backgroundColor="yellow";
for(let i=0;i<fruit.length;i++){
  fruit[i].style.fontWeight="bold";
}