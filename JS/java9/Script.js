let liss=[];let delate=document.querySelector("clean");
let back=document.querySelector("ul");
let input=document.querySelector("input");
let clean=document.querySelector(".clean");
let cons=[];
input.onkeypress=function(){

    if(event.key=="Enter")
    {
        let li=document.createElement("li"); 
        let span=document.createElement("span");
        let img=document.createElement("img");// 
        span.innerHTML=input.value;
        img.setAttribute("src","Icon.png")
        li.appendChild(img);
        li.appendChild(span);
        document.querySelector("ul").appendChild(li);
        input.value=""; 

    }
     
}
    
    back.onclick=function()
    {
        
        let bock=event.target;
        if(bock.localName=="li")
        {
            bock.classList.toggle("bbc");
        }
        else if(bock.localName=="img")
        {
            bock.parentElement.remove();
        }

    }

    document.querySelector(".clean_all").onclick=function()
    {
        let ul=back.querySelectorAll("li");

        for(let i=0;i<ul.length;i++) 
        { 
           
            ul[i].classList.toggle("bbc");
        }
        
    }
    clean.onclick=function()
    {
        let cl=back.querySelectorAll(".bbc");
        
        for(let i=0;i<cl.length;i++)
        {
            cl[i].remove();
        }
        
        
    }


    


