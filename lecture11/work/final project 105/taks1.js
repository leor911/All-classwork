function strikeOut(item){ 
    if(item.style.textDecoration === "line-through"){  
        item.style.color = "black" 
        item.style.textDecoration = "none" 
    } 
        else{ 
            item.style.color = "red" 
            item.style.textDecoration = "line-through" 
        } 
    } 
    function purchase(){ 
        div = document.getElementById("items") 
        div2 = document.getElementById("purchased-items") 
        items = div.getElementsByTagName("li") 
        itemIndex = 0 
        while(itemIndex < items.length){ 
            if(items[itemIndex].style.textDecoration === "line-through"){ 
                div2.appendChild(document.createTextNode(items[itemIndex].innerText)) 
                div2.appendChild(document.createElement("br")) 
                items[itemIndex].remove() 
            } 
            else{ 
                itemIndex++ 
            } 
        } 
    }