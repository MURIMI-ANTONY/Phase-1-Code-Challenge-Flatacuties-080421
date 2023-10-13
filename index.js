// Your code here
// accessing the 'character-bar' 
const bar=document.getElementById("character-bar")
//creating the span elements to display the character's names
const span= document.createElement("div")
bar.appendChild(span)
span.setAttribute("id","character-bar")

//accessing the characters' name via the local server

    fetch(" http://localhost:3000/characters")
    .then(res=>res.json())
    .then((data)=>{
        span.innerHTML=`<span>${data[0].name}</span>
        <span>${data[1].name}</span>
        <span>${data[2].name}</span>
        <span>${data[3].name}</span>
        <span>${data[4].name}</span>`
    })


//function vote is meant to display the amount of votes the user has fed the form


function vote(){
    let form =document.querySelector("form")
    const vote=document.getElementById("vote-count")
    
    
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        vote.textContent= e.target["votes"].value
        
        form.reset()
        
    })

   
   
    


}

vote()

//resets vote-count to zero whenever the button is clicked
let btn = document.getElementById("reset-btn")
btn.addEventListener("click",()=>{
    vote.textContent= 0
})

//the following code displays the name and image of the character to be voted

let fname=document.getElementById("name")
let image= document.getElementById("image")


bar.addEventListener("click",(e)=>{
    
    let p = e.target.parentElement;
    let index = Array.prototype.indexOf.call(p.children, e.target);
    fname.textContent= e.target.innerText
    
    fetch(` http://localhost:3000/characters/${index+1}`)
    .then(res=>res.json())
    .then((data)=>{
       image.setAttribute("src",data.image)
       image.setAttribute("alt",data.name)
     
        
    })
    
   
})






