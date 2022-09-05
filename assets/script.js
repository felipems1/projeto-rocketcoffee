function Open() {
    let menuArea = document.querySelector('.menu');

    if(menuArea.classList.contains('open') == true) {
        menuArea.classList.remove('open')
        document.querySelector('.menu-open img').src ='./assets/images/menu-buguer-open.svg'
    } else {
        menuArea.classList.add('open')
        document.querySelector('.menu-open img').src ='./assets/images/menu-buguer-close.svg'
    }
}