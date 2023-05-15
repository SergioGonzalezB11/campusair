import '../customers/customer-form.js;';
import { CustomerForm } from '../customers/customer-form.js';
export class ModalCustomer extends CustomerForm{
    constructor(){
        super();
        this.render();
    }
    render()
    {
        this.innerHTML = /*html*/`
            <div class="modal fade" id="crearCliente" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <customer-form></customer-form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>        
        `
    }
}
customElements.define("modal-customer",ModalCustomer);