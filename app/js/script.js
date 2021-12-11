// Hamburger Menu - Mobile
let showMenu = false;
let showProductMenu = false;
let showCompanyMenu = false;
let showConnectMenu = false;

const toggleIcon = document.querySelector('.icon-toggle');
const arrowIcons = document.querySelectorAll('.icon-arrow');
const menu = document.querySelector('.menu');
const product = document.querySelector('.product');
const productMenu = document.querySelector('.product-menu');
const company = document.querySelector('.company');
const companyMenu = document.querySelector('.company-menu');
const connect = document.querySelector('.connect');
const connectMenu = document.querySelector('.connect-menu');

toggleIcon.addEventListener('click', () => {
    if (!showMenu) {
        menu.classList.add('active');
        toggleIcon.attributes.src.value = './images/icon-close.svg';
        showMenu = !showMenu;
    } else {
        menu.classList.remove('active');
        toggleIcon.attributes.src.value = './images/icon-hamburger.svg';
        productMenu.classList.remove('active');
        companyMenu.classList.remove('active');
        connectMenu.classList.remove('active');
        arrowIcons[0].classList.remove('active');
        arrowIcons[1].classList.remove('active');
        arrowIcons[2].classList.remove('active');
        showMenu = !showMenu;
        showProductMenu = false;
        showCompanyMenu = false;
        showConnectMenu = false;
    }
});

product.addEventListener('click', () => {
    if (!showProductMenu) {
        productMenu.classList.add('active');
        companyMenu.classList.remove('active');
        connectMenu.classList.remove('active');
        arrowIcons[0].classList.add('active');
        arrowIcons[1].classList.remove('active');
        arrowIcons[2].classList.remove('active');
        showProductMenu = !showProductMenu;
        showCompanyMenu = false;
        showConnectMenu = false;
    } else {
        productMenu.classList.remove('active');
        arrowIcons[0].classList.remove('active');
        showProductMenu = !showProductMenu;
    }
});

company.addEventListener('click', () => {
    if (!showCompanyMenu) {
        companyMenu.classList.add('active');
        productMenu.classList.remove('active');
        connectMenu.classList.remove('active');
        arrowIcons[1].classList.add('active');
        arrowIcons[0].classList.remove('active');
        arrowIcons[2].classList.remove('active');
        showCompanyMenu = !showCompanyMenu;
        showProductMenu = false;
        showConnectMenu = false;
    } else {
        companyMenu.classList.remove('active');
        arrowIcons[1].classList.remove('active');
        showCompanyMenu = !showCompanyMenu;
    }
});

connect.addEventListener('click', () => {
    if (!showConnectMenu) {
        connectMenu.classList.add('active');
        productMenu.classList.remove('active');
        companyMenu.classList.remove('active');
        arrowIcons[2].classList.add('active');
        arrowIcons[1].classList.remove('active');
        arrowIcons[0].classList.remove('active');
        showConnectMenu = !showConnectMenu;
        showCompanyMenu = false;
        showProductMenu = false;
    } else {
        connectMenu.classList.remove('active');
        arrowIcons[2].classList.remove('active');
        showConnectMenu = !showConnectMenu;
    }
});
// Hamburger Menu - Mobile

// Dropdown Menu - Desktop
const productDesktop = document.querySelector('.product-desktop');
const productMenuDesktop = document.querySelector('.product-menu-desktop');
const companyDesktop = document.querySelector('.company-desktop');
const companyMenuDesktop = document.querySelector('.company-menu-desktop');
const connectDesktop = document.querySelector('.connect-desktop');
const connectMenuDesktop = document.querySelector('.connect-menu-desktop');

const arrowIconsDesktop = document.querySelectorAll('.icon-arrow-desktop');
console.log(arrowIconsDesktop);

productDesktop.addEventListener('mouseover', () => {
    productMenuDesktop.classList.add('active');
    arrowIconsDesktop[0].classList.add('active');
});

productDesktop.addEventListener('mouseleave', () => {
    productMenuDesktop.classList.remove('active');
    arrowIconsDesktop[0].classList.remove('active');
});

companyDesktop.addEventListener('mouseover', () => {
    companyMenuDesktop.classList.add('active');
    arrowIconsDesktop[1].classList.add('active');
});

companyDesktop.addEventListener('mouseleave', () => {
    companyMenuDesktop.classList.remove('active');
    arrowIconsDesktop[1].classList.remove('active');
});

connectDesktop.addEventListener('mouseover', () => {
    connectMenuDesktop.classList.add('active');
    arrowIconsDesktop[2].classList.add('active');
});

connectDesktop.addEventListener('mouseleave', () => {
    connectMenuDesktop.classList.remove('active');
    arrowIconsDesktop[2].classList.remove('active');
});
// Dropdown Menu - Desktop
