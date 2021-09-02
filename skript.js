
let a=5;
let b=7;
if(a>b)
{
    console.log("а больше");
}
else
{
    console.log("а меньше");
}
console.log(b*a);

// let name=prompt("what is your name");
// console.log(name);
function send(event)
{
    event.preventDefault();//не перезагружает страницу после отправки формы
    let model=document.querySelector(".model");
    model.classList.toggle("model_show");
    let x=model.querySelector(".x");
    x.onclick=function ()
    {
        model.classList.toggle("model_show");
    }




    // let nameInput=document.querySelector(".Nname");
    // let emailInput=document.querySelector(".e-maill");
    // let quesInput=document.querySelector(".heheboy");
    // console.log(emailInput);
    // let Error="";
    // if(nameInput.value=="")
    // {
    //     Error+="Name can not be empty\n";
    // }
    // if(emailInput.value=="")
    // {
    //     Error+="Email can not be empty\n";
    // }
    // if(quesInput.value=="")
    // {
    //     Error+="You have to wright question\n";
    // }
    // if(Error!="")
    // {
    //     alert(Error);
    // }
    // if(Error=="")
    // {
    //     alert("your question is send!")
    // }


}
