const sidemenutext = () => {
    const textelement = document.getElementById("menu")

    const text1 = document.createElement("p")
        text1.setAttribute("id", "sidemenutext")
        text1.textContent = "Nunc ultricies placerat scelerisque. Quisque velit dui, ornare vitae aliquet eget, accumsan sed enim. Quisque vulputate, nisi in suscipit tempor, eros eros bibendum magna, eu sodales ligula nisl eget ante. Curabitur varius mi lorem, quis efficitur neque imperdiet a. Aliquam ornare laoreet ex, vitae consectetur sapien. In sollicitudin sem eu tortor varius, et accumsan erat convallis. Quisque sit amet eros tortor. Morbi molestie sollicitudin elit, nec dignissim leo lobortis sed. Aenean eget consequat risus."

    
    textelement.appendChild(text1)
}

export {
    sidemenutext
}