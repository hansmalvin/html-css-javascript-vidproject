let iconMenu = document.querySelector('#icon-utk-menu');
let navBar = document.querySelector('.navbar');

iconMenu.onclick = () => {
    iconMenu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


let navbarScroll = document.querySelectorAll('section')
let navv = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    navbarScroll.forEach(tes => {
        let top = window.screenY;
        let secoff = tes.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top <offset + height) {
            navv.forEach(lin => {
                lin.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        }
    })
}

// harus dibawha
window.onscroll = () => {
    let judul = document.querySelector('header')

    judul.classList.toggle('scroll', window.scrollY > 100)

    iconMenu.classList.remove('bx-x');
    navBar.classList.remove('active');
}