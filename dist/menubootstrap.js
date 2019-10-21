
const slideshow = () => {

    const container = document.getElementById("menu")
    const myCarousel = document.createElement("div")
    myCarousel.setAttribute("class", "carousel slide")
    myCarousel.setAttribute("data-ride", "carousel")
    myCarousel.setAttribute("id", "myCarousel")

    // INDICATORS

    const carouselindicators = document.createElement("ol")
    carouselindicators.setAttribute("class", "carousel-indicators")

    const MyCarousel1 = document.createElement("li")
    const MyCarousel2 = document.createElement("li")
    const MyCarousel3 = document.createElement("li")

    MyCarousel1.setAttribute("data-target", "#myCarousel")
    MyCarousel1.setAttribute("data-slide-to", "0")
    MyCarousel1.setAttribute("class", "active")

    MyCarousel2.setAttribute("data-target", "#myCarousel")
    MyCarousel2.setAttribute("data-slide-to", "1")

    MyCarousel3.setAttribute("data-target", "#myCarousel")
    MyCarousel3.setAttribute("data-slide-to", "2")

    //APPENDING INDICATORS (NOT DONE FOR THE SAKE OF FIRST PROJECT)

    // carouselindicators.appendChild(MyCarousel1)
    // carouselindicators.appendChild(MyCarousel2)
    // carouselindicators.appendChild(MyCarousel3)
    // myCarousel.appendChild(carouselindicators)


    // WRAPPER FOR SLIDES

    const carouselinner = document.createElement("div")
    carouselinner.setAttribute("class", "carousel-inner")

    const item1 = document.createElement("div")
    item1.setAttribute("class", "item active")
    const image1 = document.createElement("img")
    image1.setAttribute("src", "../dist/photos/burger.jpg")
    item1.appendChild(image1)


    const item2 = document.createElement("div")
    item2.setAttribute("class", "item")
    const image2 = document.createElement("img")
    image2.setAttribute("src", "../dist/photos/vege.jpg")
    item2.appendChild(image2)


    const item3 = document.createElement("div")
    item3.setAttribute("class", "item")
    const image3 = document.createElement("img")
    image3.setAttribute("src", "../dist/photos/fish.jpg")
    item3.appendChild(image3)

    carouselinner.appendChild(item1)
    carouselinner.appendChild(item2)
    carouselinner.appendChild(item3)
    myCarousel.appendChild(carouselinner)

    // LEFT AND RIGHT CONTROLS

    const leftcontrol = document.createElement("a")
    leftcontrol.setAttribute("class", "left carousel-control")
    leftcontrol.setAttribute("href", "#myCarousel")
    leftcontrol.setAttribute("data-slide", "prev")

    const glyphiconleft = document.createElement("span")
    glyphiconleft.setAttribute("class", "glyphicon glyphicon-chevron-left")
    const srleft = document.createElement("span")
    srleft.setAttribute("class", "sr-only")
    srleft.textContent = "Previous"

    const rightcontrol = document.createElement("a")
    rightcontrol.setAttribute("class", "right carousel-control")
    rightcontrol.setAttribute("href", "#myCarousel")
    rightcontrol.setAttribute("data-slide", "next")

    const glyphiconright = document.createElement("span")
    glyphiconright.setAttribute("class", "glyphicon glyphicon-chevron-right")
    const srright = document.createElement("span")
    srright.setAttribute("class", "sr-only")
    srright.textContent = "Next"

    // CONTROL APPEND
    
    // leftcontrol.appendChild(glyphiconleft)
    // leftcontrol.appendChild(srleft)

    // rightcontrol.appendChild(glyphiconright)
    // rightcontrol.appendChild(srright)

    // myCarousel.appendChild(leftcontrol)
    // myCarousel.appendChild(rightcontrol)

    // FINAL APPEND

    container.appendChild(myCarousel)

}

export {
    slideshow
}