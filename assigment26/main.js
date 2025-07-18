
// Blocking DataTransfer
function fetchUserData(){
    alert(" are you alright ");
   return {
    id:16197, name:"abdirsak"
   }
}
console.log("Data Is fetching");
const user = fetchUserData();
console.log("is fetched", user);
console.log("this massege is blocked");






// non-blocking Data
 function GetUserData(callback){
    setTimeout( ()=>{
        const student={
       id:121, name:"Abdilahi",class:"A"
        }
        callback(student);
    } ,2000)
 }
console.log("fetch student info")
 GetUserData(function (student){
    console.log(student)
 });
 console.log("student data is fetched")