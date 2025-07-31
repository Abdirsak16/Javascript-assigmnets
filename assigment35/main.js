




function changeImage(){
   const image = document.querySelector('#image');

const url =prompt('Enter the new URL');
const border=prompt("enter the border Color You want");
const background=prompt('Enter the background Color you want');
const balac=propmt('Enter your width');
const dherer=prompt('enter you height');
  
 image.setAttribute('src', url);
image.style.border = `2px solid ${borderColor}`;
image.style.backgroundColor=(background);
image.style.width= `${balac}px`;
image.style.height=`${dherer}px`;

}
