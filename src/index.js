
import {pageload} from '../dist/pageload.js'; 
import {menutab} from '../dist/menutab.js';
import {contacttab} from '../dist/contacttab.js';
import {infotab} from '../dist/infotab.js';
import {slideshow} from '../dist/menubootstrap.js';
import {sidemenutext} from '../dist/sidemenutext.js';
import '../src/styles/app.css';




function addNavEvents() {
    const infobutton = document.getElementById('infobutton');
    const contactbutton = document.getElementById('contactbutton');
    const menubutton = document.getElementById('menubutton')

    infobutton.addEventListener('click', infotab);
    contactbutton.addEventListener('click', contacttab)
    menubutton.addEventListener('click', menutab)
  

}


pageload()
infotab()
addNavEvents()
slideshow()
sidemenutext()
