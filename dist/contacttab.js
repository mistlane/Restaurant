const contacttab = () => {
    const toBeDeleted = document.getElementById("text")

    while (toBeDeleted.firstChild) {
        toBeDeleted.removeChild(toBeDeleted.firstChild);
    }
    
    const textfunction = () => {
        const container = document.getElementById("content")

        const textelement = document.getElementById("text")



        const text = document.createElement("p")
        text.setAttribute("id", "contacttext")
        text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor, purus nec euismod vulputate, lorem turpis euismod neque, at venenatis purus magna vitae felis. Vivamus imperdiet sodales neque sed accumsan. Pellentesque id tortor rutrum, tincidunt libero ut, volutpat neque. Proin vehicula pulvinar orci, sed tincidunt nibh volutpat non. Morbi sagittis lacus sed turpis aliquam, nec aliquam ante porttitor. Quisque in nisl sit amet arcu lobortis facilisis. Aliquam sit amet leo sapien. Ut eu tortor at purus venenatis ultricies. Aenean in urna in libero elementum eleifend. In quis ligula vitae leo ultricies lobortis quis sit amet velit. Morbi fermentum sapien quis viverra fermentum."

        const mapcontainer = document.createElement("div")
        mapcontainer.setAttribute("id", "mapcontainer")
        
        const map = document.createElement("p")
        
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57129.97701342576!2d10.368551653434462!3d63.418718985441714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319747037e53%3A0xbf7c8288f3cf3d4!2sTrondheim%2C%20Norja!5e0!3m2!1sfi!2sfi!4v1571408508090!5m2!1sfi!2sfi" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe></p>'

        mapcontainer.appendChild(map)
        textelement.appendChild(text)
        textelement.appendChild(mapcontainer)
      
      


    
    }
    textfunction()

}

export {
    contacttab
}