let cart=document.querySelectorAll(".cart");
let flipt=false;//не перевёрнута
let firstcart;
let secondcart;
let lok=0;

function disable()
{
   firstcart.removeEventListener("click", flip);
   secondcart.removeEventListener("click", flip);
   flipt=false;
   firstcart=null;
   secondcart=null;
   lok=0;
}

function anflip() 
{
   setTimeout(() => 
   {
      firstcart.classList.remove("flip");
      secondcart.classList.remove("flip");
      flipt=false;
      firstcart=null;
      secondcart=null;
      lok=0;
   }, 1000);     
}


function flip() 
{
   let post=event.target.parentElement;
   if(lok==1)
   {
      return;
   }
   post.classList.add("flip");
   console.log(flipt)
   if(!flipt)
   {
      flipt=true;//перевёрнута
      firstcart=post;
      console.log(firstcart);
      return;
   }
   lok=1;
   secondcart=post;
   firstcart.dataset.add==secondcart.dataset.add? disable():
   anflip();
}

cart.forEach(card=>card.addEventListener("click", flip));

cart.forEach(card=>
{
   let randpaz=Math.floor(Math.random()*12);
   card.style.order=randpaz;
})

