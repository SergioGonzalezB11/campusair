import { getDataAll } from "../../Apis/customer-api";
export  class CustomerLista extends HTMLElement {
    constructor(){
        super();
        this.render();
        this.requestApiGetCliente();
    }
    render(){
        this.innerHTML=/*html*/`

        <h1>LIsta de clientes CampusAir</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Fecha de registro</th>
                    <th>Nro Documento</th>    
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Ciudad Origen</th>
                    <th>Pais Origen</th>
                    <th>fechaNacimiento</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="lista-clientes">

            </tbody>
        </table>
        `;

    }
    requestApiGetCliente = () =>{
        getDataAll()
            .then((result)=>{
                this.renderClientes(result);
            })
    }
    renderClientes = (clientes)=>{
        let clientesHTML = '';
        for(let cliente of clientes){
            clientesHTML += this.crearListaClientesHTML(cliente);
        }
        document.getElementById('lista-clientes').innerHTML = clientesHTML;
        this.callModal();
        this.putData();
        this.delete();
    }
    crearListaClientesHTML = (clientes)=>{
        let listaHTML = /* html */ `
        <tr>
            <td>${clientes.id}</td>
            <td>${clientes.fechaRegistro}</td>
            <td>${clientes.numeroIdentificacion}</td>
            <td>${clientes.nombres}</td>
            <td>${clientes.apellidos}</td>
            <td>${clientes.correo}</td>
            <td>${clientes.telefono}</td>
            <td>${clientes.CiudadOrigen}</td>
            <td>${clientes.PaisOrigen}</td>
            <td>${clientes.fechaNacimiento}</td>
            <td>
                    <a class="btn btn-success " data-bs-toggle="modal" data-bs-target="#putCliente" id="putData" data-idcli='${clientes.id}'><i class='bx bx-edit-alt icono' data-idcli='${clientes.id}'></i></a>
                    <!-- Button trigger modal -->
                    <a id="delete" type="button" data-borrar="DELETE"class="btn btn-danger" data-idclidel='${clientes.id}'><i class='bx bx-message-alt-x icono'></i></a>
            </td>
            </tr>
        `;
        return listaHTML;
    }
}
customElements.define('customer-lista', CustomerLista);