const butoonLogin = document.getElementById('aceptarLogin');
const añadirBeneficiario = document.getElementById('añadirBeneficiario');
const formBeneficiarios = document.getElementById('formBeneficiarios');
const btnUpdateUser = document.getElementById('updateUser');
const btnAceptarBeneficiario = document.getElementById('btnAceptarBeneficiario')
const formInvitacion = document.getElementById('formInvitacion')

let beneficiario = false;
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

const SaveBeneficiario = (msg) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: msg
      })

      formBeneficiarios.reset();
      añadirBeneficiario.innerHTML = `Añadir <i class="fas fa-user-plus"></i>`
}

const SelectBeneficiario = (id) => {
    beneficiario = 'Nicolas Chamorro';
    document.getElementById(`tr1`).className = '';
    document.getElementById(`tr2`).className = '';
    document.getElementById(`tr3`).className = '';

    const tr = document.getElementById(`tr${id}`)
    tr.className= 'table-active'
    btnAceptarBeneficiario.removeAttribute('disabled')
}

const UpdateBeneficiario  = () => {
    for (let index = 0; index < 12; index++) {
        formBeneficiarios[index].value= beneficiario;
    }
    añadirBeneficiario.innerHTML = `Actualizar <i class="fas fa-user-plus"></i>`
    
}

const HandleSendInvitation = () => {
    const loading = document.getElementById('loading');
    loading.className= 'loader';

    const validate =  formInvitacion[1].value == '' && formInvitacion[2].value == '' ? false : true
     if (!validate) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe seleccionar un medio de invitacion',        
          })
        loading.className += ' d-none'
     } else {
        setTimeout(() => {
            formInvitacion.reset();
            loading.className += ' d-none'
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Enviado con exito'
              })
        }, 2500);
     }      
}


butoonLogin.addEventListener('click',  HandleValidateLogin);
añadirBeneficiario.addEventListener('click', () => SaveBeneficiario('Realizado con exito'));
btnUpdateUser.addEventListener('click', () => SaveBeneficiario('Se actualizo'));
btnAceptarBeneficiario.addEventListener('click', UpdateBeneficiario)

formInvitacion.addEventListener('submit', (e) => {
    e.preventDefault()
    HandleSendInvitation();
})