let likemes=[];

function remove(s)
{
    likemes.splice (likemes.indexOf(s));
}
let likes=0;
document.querySelector(".N1").value=likes;




const b=document.querySelector("body");
b.onclick=function(){
    let el=event.target;

    if(el.className.indexOf('heart')!=-1)
    {
        if(el.className.indexOf('white-heart')==-1)
        {
            el.classList.add('white-heart');
            likemes.push(el.id);
            likes=likes+1;
            document.querySelector(".N1").innerHTML=likes;
        }
        else{
            el.classList.remove('white-heart');
            remove(el.id);
            likes=likes-1;
            document.querySelector(".N1").innerHTML=likes;
        }
        console.log(likemes)
    }
    
}
