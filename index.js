
const btnjustify = document.querySelector('.btn-justify');
const btnjustifyMobile = document.querySelector('.btn-justify_mobile');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main')
 

const popup = new Popup(navigation);
popup.openClose(btnjustify,main);
popup.openCloseMobile(btnjustifyMobile);


