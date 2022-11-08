input=prompt("Enter a number")
for (let i=1;i<11;i++){
    mult=[]
    mult=input*i
 
    child=document.createElement("h1")
    child.innerHTML=mult
    div=document.getElementById("multable")
    div.appendChild(child)
}
