function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance)
        elements[instance].scrollIntoView({behavior: "smooth"});
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.top');
});

link2.addEventListener('click', () => {
    scrollToElement('.about');
});

link3.addEventListener('click', () => {
    scrollToElement('.sobre_nosotros');
});