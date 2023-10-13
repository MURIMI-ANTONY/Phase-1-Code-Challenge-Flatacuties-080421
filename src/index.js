// Your code here
const bar=document.getElementById("character-bar")
const span= document.createElement("div")
bar.appendChild(span)
span.setAttribute("id","character-bar")

    fetch(" http://localhost:3000/characters")
    .then(res=>res.json())
    .then((data)=>{
        span.innerHTML=`<span>${data[0].name}</span>
        <span>${data[1].name}</span>
        <span>${data[2].name}</span>
        <span>${data[3].name}</span>
        <span>${data[4].name}</span>`
    })





function vote(){
    let form =document.querySelector("form")
    const vote=document.getElementById("vote-count")
    vote.innerHTML= 0
    let btn = document.getElementById("reset-btn")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let input=document.getElementById("votes")
        vote.innerText = e.target["votes"].value
        form.reset()
        console.log(vote)
    })

    btn.addEventListener("click",()=>{
        vote.innerHTML= 0
    })
   
    


}

let name=document.getElementById("name")



span.addEventListener("click",(e)=>{
    let image= document.getElementById("image")
    let p = e.target.parentElement;
    let index = Array.prototype.indexOf.call(p.children, e.target);
    console.log(index)
    
    fetch(` http://localhost:3000/characters/${index+1}`)
    .then(res=>res.json())
    .then((data)=>{
       
  
    

     name.innerHTML=data.name
     image.setAttribute("src",data.image)
     image.setAttribute("alt",data.name)
     vote()
        
    })
 
})



/*
const name2 =document.getElementById("name2")
const image2=document.getElementById("image-url")*/
const form2 = document.getElementById("character-form")
form2.addEventListener("submit",(e)=>{
    e.preventDefault()
    name2 =e.target["name2"].value
    console.log(name2)
    image2=e.target["image-url"].value


    let spanExtra = document.createElement("span")
    span.append(spanExtra)
    spanExtra.innerHTML= name2

    



})

