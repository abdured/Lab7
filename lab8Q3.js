3)Array.prototype.sort=function(){
  array=this;
  for(let i=0;i<array.length-1;i++){
    for(let j=0;j<array.length-1;j++){
       if(array[j]>array[j+1]){
      temp=array[j];
      array[j]=array[j+1];
      array[j+1]=temp;
    }
   
    }
  }
  return array;
}
let x=[5,6,8,9,1];
console.log(x.sort());