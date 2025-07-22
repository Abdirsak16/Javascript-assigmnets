// 
function canVote(){
   return new Promise ((can_vote,cannot_vote)=>{
      setTimeout( ()=>{
         const vote=10;
         if(vote >= 18){
            can_vote("you can vote ")
         }else{
            cannot_vote("you cannot vote")
         }
      },1000)
   }

   )
}

canVote().then((data)=> console.log("Voter",data))
.catch((err)=> console.log(err));