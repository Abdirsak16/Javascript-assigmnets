


function operate(x,y,callback){
   return callback(x,y)
}
function multiplication(x,y){
   return x*y;
}
function division(x,y){
   return x/y;
}
console.log("Multiplication", operate(6,7,multiplication))
console.log("Division", operate(7,7, division))