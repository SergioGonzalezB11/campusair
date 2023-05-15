export class MenuController extends HTMLElement{
    constructor(){
        super();
        this.initMenu();
    }
    initMenu = () =>{
        const myModal = document.querySelector('#crearCliente')

        document.querySelectorAll('.link-menu').forEach((val,id)=>{
            val.addEventListener("click", (e) => {

                const dato = e.target.dataset.info;
                switch(dato){
                    case "modal":
                            console.log(dato);
                            myModal.addEventListener('shown.bs.modal', function () {
                                //myInput.focus()
                            })
                        break;
                    case "wc-listarcliente":
                            const listar = document.querySelector("#wc-listarcliente");
                            listar.classList.toggle('d-none');
                        break;
                    case "buscar-cliente":
                        break;
                    default :
                        console.log("Metio la pata errrorrr");
                        break;
                }

                e.stopImmediatePropagation();
                e.preventDefault();
            })
            
        })
    }
}
customElements.define("menu-controller",MenuController);