const menuBtn = document.querySelector('.fa-circle-chevron-down');
const menuBtnX = document.querySelector('.fa-arrow-right-from-bracket')
const navBar = document.querySelector('.navbar');


let menuOpen = false;


menuBtn.addEventListener('click', () => {

    if(!menuOpen){
        menuBtn.classList.add('hidden');
        navBar.classList.remove('hidden');
        navBar.classList.add('show');


        menuBtnX.classList.add('show');
        menuBtnX.classList.remove('hidden');
        menuOpen = true;
    
        if(menuOpen){
        menuBtnX.addEventListener('click', () => {
        if (menuOpen) {
    

        menuBtnX.classList.remove('show');
        menuBtnX.classList.add ('hidden');

        navBar.classList.add('hidden');
        menuBtn.classList.add('show');

        menuOpen = true;
        }})

        }
    }

})



menuBtnX.addEventListener('click', () => {
        if (menuOpen) {
    

        menuBtnX.classList.remove('show');
        menuBtnX.classList.add ('hidden');

        navBar.classList.add('hidden');
        menuBtn.classList.add('show');

        menuOpen = true;
        }}
        )
    