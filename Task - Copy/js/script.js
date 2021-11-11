"use strict"
let buttons = [];
let count;
let buttonstorage;

window.onload=()=>{
    buttonstorage=getStorage();
    buttons=document.querySelectorAll(".button-1");
    count=document.querySelector("#count");
    //Sets favorite count onload
    if(!buttonstorage){
        count.textContent=0;
     
    }
    else{
        count.textContent=buttonstorage.length;
    }
    
    SliderContent();
    getShipping();
    buttonClickHandler();
    SetImage();
}
//BasketMenu slider up and down
$(document).ready(function(){
    $(".basket-menu").slideUp();
    $(".basket").on("click",function(){
        $(".basket-menu").slideToggle();

    })
})
//Basket menu products
function SliderContent(){
    const basketmenu=document.querySelector(".basket-menu")
   
    if(buttonstorage.length>0){
        buttonstorage.forEach(el=>{
            console.log(el);
            const id = el;
            const card = document.getElementById(`${id}`).cloneNode(true);
            
            
            basketmenu.appendChild(card);
            
            
        })
    }
    else{
        basketmenu.textContent="no favorites";
    }
}

//Product count like and unlike system
function buttonClickHandler(){
    
    buttons.forEach(el=>el.addEventListener("click",function(e){
        e.preventDefault();
        const id = el.parentElement.parentElement.getAttribute("id");
        if(buttonstorage.includes(id)){
            buttonstorage=buttonstorage.filter(el=>el!==id)
            
            
        }
        else{
            buttonstorage.push(id);
           
            
        }
        count.textContent=`${buttonstorage.length}`

        localStorage.setItem("fav-products",buttonstorage);

        

    }))
}
//GEtting local storage
function getStorage(){
    const storage=localStorage.getItem("fav-products");
    if(storage){
        return storage.split(",")
    }
    else{
        return []
    }
}
//Shipping
function getShipping(){
    const buttonsshipping = document.querySelectorAll(".button-2");
    buttonsshipping.forEach(el=>el.addEventListener("click",function(){
        location.href="shipping.html"
    }))
}
//Setting image of product on click
function SetImage(){
    let images = document.querySelectorAll(".rooter-img");
    images.forEach(el=>el.addEventListener("click",function(){
        const source = el.getAttribute("src")
        localStorage.setItem("image",source)
        location.href="product.html"
    }))
}




