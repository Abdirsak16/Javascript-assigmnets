
const people=[
    {
        name:"abdi", age:"22", city:"borama"
    },
    {
        name:"Ali" ,age:"21", city:"Burco"
    },{
        name:"fadumo", age:"27",city:"Lughaya"
    }

]
// FOR IN LOOP
// for(let person in people){
//     console.log("------")
//     console.log(people[person])
// }


// for off
for(let person of people){
    console.log("------")
    console.log(person)
}