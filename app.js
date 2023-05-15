import './Components/modales/modal-customer.js';
import './Components/listas/listas-customer.js';
import { MenuController } from  './Controllers/menu-controller.js';
const menu = new MenuController();
document.addEventListener('DOMContentLoaded',(e) =>{
    menu.initMenu();
})