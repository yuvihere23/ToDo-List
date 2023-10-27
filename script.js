const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addtask()
{
    if(inputbox.value === ''){
    alert("You must write some thing");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata()

}

listcontainer.addEventListener('click',function(e){
if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked');

}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
}

},false);

function savedata(){
    localStorage.setItem('data',listcontainer.innerHTML)
}
function displaytask(){
    listcontainer.innerHTML=localStorage.getItem('data');
}
displaytask();
