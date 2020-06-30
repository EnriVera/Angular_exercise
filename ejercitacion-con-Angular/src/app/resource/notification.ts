
import Swal from 'sweetalert2';

export class SweeNotification{
    ErrorModel(valor:String){
        Swal.fire({
            position: 'bottom-end',
            width: '100%',
            icon: 'error',
            backdrop: true,
            toast: true,
            title: 'A ocurido un error',
            showConfirmButton: false,
            text: ""+valor,
            timer: 4000,
            customClass:{
                popup: "sweeEstile"
            }
          })
    }

    SuccessModel(valor:String){
        Swal.fire({
            position: 'bottom-end',
            width: '100%',
            icon: 'success',
            backdrop: true,
            toast: true,
            title: ''+valor,
            showConfirmButton: false,
            timer: 4000,
            customClass:{
                popup: "sweeEstile"
            }
          })
    }
}