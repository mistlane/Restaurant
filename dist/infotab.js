const infotab = () => {
    const toBeDeleted = document.getElementById("text")

    while (toBeDeleted.firstChild) {
        toBeDeleted.removeChild(toBeDeleted.firstChild);
    }
    


    const textfunction = () => {
        const container = document.getElementById("content")

        const textelement = document.getElementById("text")

        const textimage = document.createElement("img")
        textimage.setAttribute("id", "restaurantimg")
        textimage.setAttribute("src", "http://cowanindustries.com/Data/Sites/1/media/restaurant-generic-pic.jpg")

        const text1 = document.createElement("p")
        text1.setAttribute("id", "text1")
        text1.textContent = "Pink Division Calling is known for it's flamboyant looks and amazing dishes. The dishes are made from fresh ingredients in our high tech kitchen by our insanely talented head-cheff Gustav. We have no other employees."

        const br1 = document.createElement("br")

        const text2 = document.createElement("p")
        text2.setAttribute("id", "text2")
        text2.textContent = "We are focused on delivering an amazing experience for all of our visitors. "
        

        

      

       
        textelement.appendChild(text1)
        // textelement.appendChild(br1)
        textelement.appendChild(text2)
        textelement.appendChild(textimage)
    
    }
    textfunction()
}

export {
    infotab
}
