// SCROLL HEADER
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header');
    else nav.classList.remove('active-header')
}

window.addEventListener('scroll', scrollHeader)

//DROPDOWN MENU

const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');


const Menuitem2 = document.getElementById('menu-item-2');
const Menuitem3 = document.getElementById('menu-item-3');

function ShowDropdown1(event){
    event.preventDefault();
    
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}

function ShowDropdown2(event){
    event.preventDefault();
    
    dropdownMenu2.classList.toggle('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}

function ShowDropdown3(event){
    event.preventDefault();
    
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.toggle('active-dropdown-menu');
}

function RemoveDropdown(){
    
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}


Menuitem2.addEventListener('click', ShowDropdown2);
Menuitem3.addEventListener('click', ShowDropdown3);


dropdownMenu2.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu3.addEventListener('mouseleave', RemoveDropdown);


// MENU MOBILE

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile')