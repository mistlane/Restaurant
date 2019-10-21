

const pageload = () => {
    const headerfunction = () => {
        const container = document.getElementById("content")
        const header = document.createElement("div")
        header.setAttribute("id", "header")
        const title = document.createElement("h1")
        title.setAttribute("id", "title")
        title.textContent = "Pink Division Calling"

        const textelement = document.createElement("div")
        textelement.setAttribute("id", "text")

        header.appendChild(title)
        container.appendChild(header)
        container.appendChild(textelement)

    }

    const tabfunction = () => {
        const container = document.getElementById("content")
        const tabs = document.createElement("div")
        tabs.setAttribute("class", "tab")
        
        const infobutton = document.createElement("button")
        infobutton.setAttribute("class", "tablinks")
        infobutton.setAttribute("id", "infobutton")
    
        infobutton.innerHTML = "Information"
    
        const contactbutton = document.createElement("button")
        contactbutton.setAttribute("class", "tablinks")
        contactbutton.setAttribute("id", "contactbutton")
     
        contactbutton.innerHTML = "Contact"

        const menubutton = document.createElement("button")
        menubutton.setAttribute("class", "tablinks")
        menubutton.setAttribute("id", "menubutton")
     
        menubutton.innerHTML = "Menu"
    
    
        tabs.appendChild(infobutton)
        tabs.appendChild(menubutton)
        tabs.appendChild(contactbutton)
        container.appendChild(tabs)
    }
    


    const menufunction = () => {
        const container = document.getElementById("content")
        const menu = document.createElement("div")
        menu.setAttribute("id", "menu")
       

        container.appendChild(menu)

    }


  
    const footerfunction = () => {
        const container = document.getElementById("content")
        const footerelement = document.createElement("div")
        footerelement.setAttribute("id", "footer")
        const footertext = document.createElement("p")
        footertext.setAttribute("id", "footertext")

       
        footertext.textContent =  "This is most definitely legal and not at all illegal. " +
        "We have all the paperwork needed to do business as a restaurant. Trust us. Or the feds. Your choice."

        footerelement.appendChild(footertext)
        container.appendChild(footerelement)

    }
    
    headerfunction()
    menufunction()
    tabfunction()
    footerfunction()








}


export {
    pageload
}