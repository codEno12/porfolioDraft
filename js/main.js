
// hidden before click 
const navBar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.fa-circle-chevron-down');


// close after click 
const menuBtnX = document.querySelector('.fa-arrow-right-from-bracket')
const menuItem1 = document.querySelector('.items')
const menuItem2 = document.querySelector('.item2')
const menuItem3 = document.querySelector('.item3')
const menuItem4 = document.querySelector('.item4')

const newArr = [menuBtnX, menuItem1, menuItem2, menuItem3, menuItem4]

menuBtn.addEventListener('click', () => {
    let menuOpen = false;
    if(!menuOpen) {
        menuBtn.classList.add('hidden');

        navBar.classList.remove('hidden')
        menuBtnX.classList.remove('hidden');

        menuOpen = true;
        if (menuOpen){

            newArr.map(ele => {
                ele.addEventListener('click', () => {
                menuBtn.classList.remove('hidden');

                navBar.classList.add('hidden')
                menuBtnX.classList.add('hidden');
                menuOpen = true;
                })
            })
        }
    }
})



