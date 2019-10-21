const menutab = () => {
    const toBeDeleted = document.getElementById("text")

    while (toBeDeleted.firstChild) {
        toBeDeleted.removeChild(toBeDeleted.firstChild);
    }
    


    const textfunction = () => {
        const container = document.getElementById("content")

        const textelement = document.getElementById("text")

        const imagecontainer = document.createElement("div")
        imagecontainer.setAttribute("id", "menuimgcontainer")

        const textimage = document.createElement("img")
        textimage.setAttribute("id", "menuimg")
        textimage.setAttribute("src", "http://www.ravintolaronai.fi/attachments/Image/pizzat.jpg?template=generic")

        imagecontainer.appendChild(textimage)
        textelement.appendChild(imagecontainer)
 
    
    }
    textfunction()
}

export {
    menutab
}
