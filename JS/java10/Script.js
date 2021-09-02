let numb=Math.floor(Math.random()*(10))+1;
let trys=Math.floor(Math.random()*(5))+1;
document.querySelector("span").innerHTML=trys
function rand()
{
    return Math.floor(Math.random()*(10))+1;
}
//let got=document.querySelector(".youwin").style.opacity="0%";
document.querySelector(".content").onclick=function()
{
    let target=event.target;
    if(target.classList.contains("numbers"))
    {
        let unumb=target.innerHTML;
        if(unumb==numb)
        {
            alert("you win");            
            document.querySelector(".content").style.opacity="0%";
            document.querySelector(".new").style.opacity="100%";
            document.querySelector(".youwin").style.opacity="100%";
        }
        else if(unumb>numb)
        {
            trys=trys-1;
            alert("the number is too large");
            if(trys==0)
            {
                alert("Game over!!! Nommber was "+numb);
                document.querySelector(".content").style.opacity="0%";
                
            }
            document.querySelector("span").innerHTML=trys;
            
        }
        else
        {
            trys=trys-1;
            alert("the number is too small");
            if(trys==0)
            {
                console.log(trys);
                alert("Game over!!! Nommber was "+numb);
                document.querySelector(".content").style.opacity="0%";
            }
            document.querySelector("span").innerHTML=trys;
            
        }
    }
    
}

document.querySelector(".new").onclick=function()
{
    numb=rand();
    trys=Math.floor(Math.random()*(5))+1;
    document.querySelector("span").innerHTML=trys;
    document.querySelector(".content").style.opacity="100%"
    document.querySelector(".youwin").style.opacity="0%";
}
