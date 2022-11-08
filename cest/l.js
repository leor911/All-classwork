function getRandomColor(){
    Rando = Math.floor(Math.random() * 3)


    if(Rando == 0){
        let button = document.getElementById("the div")
        console.log(div.style.backgroundcolor = "red")
     
     }
     
     
     if(rando == 1){
         let button = document.getElementById("the div")
         div.style.backgroundcolor = "green"
     }
     
     if(rando == 2){
         let button = document.getElementById("the div")
         div.style.backgroundcolor= "blue"
     }
    
}
function selectChange(select){
    option = select.value
    if(option==="red"){
    changeColor("red")
}
else if(option === "green"){
    changeColor("green")
}
else if(option === "blue"){
    changeColor("green")
}
else if(option === "Random"){
    random()


   
}
else if(option === "reset"){
    reset()
}
select.selectedIndex=0
}
function changeColor(color){
    for(i=0;i<=9;i++){
        newButton = document.createElement("button")
        newButton.innerText = 'Button ${i}'
        newButton.style.backgroundcolor=getRandomColor()
        
        div.appendChild(newButton)
    }
}
function random(){
 Math.floor(Math.random() * 3)


}


function reset(){
    
}


div = document.getElementById("the div")
defualtColors= []


for(i=0;i<=9;i++){
    newButton = document.createElement("button")
    newButton.innerText = 'Button ${i}'
    currentColor= getRandomColor()
    defualtColors.push(currentColors)
    newButton.style.backgroundcolor=
    
    div.appendChild(newButton)
}
