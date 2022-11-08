function getRandomColor(){
    colorIndex = Math.floor(Math.random()*3)
    if(colorIndex === 0)
    return "red"
    
    else if (colorIndex === 1)
    return "green"
    
    else
    return "blue"
    }
    
    function selectChange(select){
    option = select.value
    if(option === "Red")
    
    changeColor("red")
    else if(option === "Green")

    changeColor("green")
    else if(option === "Blue")
    
    changeColor("blue")
    else if(option === "Random")
    
    random()
    else if(option === "Reset")
    
    reset()
    select.selectedIndex = 0
    
    }
    
    function changeColor(color){
    
    buttons = document.getElementsByTagName("button")
    for(i=0;i<=9;i++){
    buttons[i].style.backgroundColor = color
    
    }
        }

    function random(){
    buttons = document.getElementsByTagName("button")
    for(i=0;i<=9;i++){
    buttons[i].style.backgroundColor = getRandomColor()
    
    }
        }
    function reset(){
    buttons = document.getElementsByTagName("button")
    for(i=0;i<=9;i++){
    buttons[i].style.backgroundColor = defaultColors[i]
    }
        }
    div = document.getElementById("the div")
    defaultColors = []
    for(i=0;i<=9;i++){
    newButton = document.createElement("button")
    newButton.innerText = `Button ${i}`
    currentColor = getRandomColor()
    defaultColors.push(currentColor)
    newButton.style.backgroundColor = currentColor
    div.appendChild(newButton)
    }