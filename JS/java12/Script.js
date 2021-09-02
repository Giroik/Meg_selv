/*Lets*/
let name="";
let aga=document.querySelector("#aga");
let input=document.querySelector("input");
let OK=document.querySelector(".rools");
let start=document.querySelector("#bbb");
let agree=document.querySelector("#checkbox");
/*задания*/
agree.disabled=true;
start.disabled=true;
OK.style.opacity="0%";
function print()
{
    name=input.value;
    let ruls=`Hello, ${name}. Look at the rools.`;
    alert(ruls);
    input.disabled=true;
    input.style.color="white";
    OK.style.opacity="100%"
    OK.style.position = "relative";
    OK.style.zIndex = "2";
    aga.style.disabled=true;
    agree.disabled=false;
}

agree.onclick=function()
{ 
    if(agree.checked==true)
    {
        start.disabled=false;
    }
    else
    {
        start.disabled=true;
    }

}


/* написать функию, которая создадим массив глобальный, value+= добавляем ещё что-то
каккой-то цикл, который выводит по буквам всю строку value=value+ruls[i] 01
ruls[i]
i{0..lengh(ruls)-длинна строки}

*/