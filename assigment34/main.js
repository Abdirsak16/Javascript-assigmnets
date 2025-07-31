


function addItem(){
   const item =document.querySelector('#items');
   const newItem =document.createElement('li');
   newItem.textContent='added item';
   item.appendChild(newItem);

}
function removeItem(){
   const item =document.querySelector('#items');
   if(item.lastChild){
      item.removeChild(item.lastChild)
   }
}