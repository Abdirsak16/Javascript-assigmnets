

async function fetchDataWeb(){
   try {
      const data= await fetch('https://jsonplaceholder.typicode.com/posts');
      const userData = await data.json();
      console.log(userData)
      
   } catch (err) {
      console.log(err)
   }
}
fetchDataWeb()