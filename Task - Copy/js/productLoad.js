let image;
//Sets clicked image to product html
window.onload=()=>{
   image=document.querySelector(".target-img");
   const src = localStorage.getItem("image");
   image.setAttribute("src",src);

}