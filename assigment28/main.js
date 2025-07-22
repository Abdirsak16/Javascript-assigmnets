function canVote(){
   return new Promise ((can_vote,cannot_vote)=>{
      setTimeout( ()=>{
         const vote=20;
         if(vote >= 18){
            can_vote("you can vote ")
         }else{
            cannot_vote("you cannot vote")
         }
      },1000)
   }

   )
}

async function FetchVote(){
   try {
      const voter = await   canVote();
      console.log(voter);
   } catch (err) {
      console.log(err);
   }
}
FetchVote();