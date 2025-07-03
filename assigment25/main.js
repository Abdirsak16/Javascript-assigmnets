

//spreed operator
let array1=[1,2,3];
let array2=[...array1,4,5,6];
console.log(array2);



//rest paramater
function multiply(...numbers){
    return numbers.reduce((total,numb)=> total * numb,1);
}
console.log(multiply(20,30,40))