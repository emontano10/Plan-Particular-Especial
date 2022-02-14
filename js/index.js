const butoonLogin = document.getElementById('aceptarLogin');
let accion;

const HandleValidateLogin = () => {
    if (accion == 'pin') {
        
    } else {
        const containerPin = document.getElementById('pin');
        const containerbtnValidar = document.getElementById('btnValidar');
        const btnValidar = document.querySelector('#btnValidar button');
        
        containerPin.className = 'form-floating col-12 col-md-6';  //remove d-none
        containerbtnValidar.className += ' justify-content-center';  // lo centra
        btnValidar.innerHTML = `Validar  <i class="fad fa-lock-alt"></i>`
        btnValidar.removeAttribute('data-bs-toggle') // remove accion modal
        btnValidar.removeAttribute('data-bs-target')
    
        accion = 'pin';
    }
}

butoonLogin.addEventListener('click', HandleValidateLogin);

