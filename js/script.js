// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger di klik
document.querySelector('#hamburger').onclick = () =>{
    navbarNav.classList.toggle('active');
};

//klik diluar hamburger untuk menghilangkan sidebar

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})