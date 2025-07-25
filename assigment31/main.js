// get

async function fetcUser() {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if(!response.ok){
         throw new Error('Https error:',response.status)
      }
         console.log(response)
      const data =await response.json();
      console.log(data)
   } catch (error) {
      console.log(error)
      
   }
   
}
fetcUser()