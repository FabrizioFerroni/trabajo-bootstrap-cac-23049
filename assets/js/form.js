const form = document.getElementById('form');

form.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mensaje = document.getElementById('mensaje').value;

    const cadenaAleatoria = longitud => {
        const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let aleatoria = "";
        for (let i = 0; i < longitud; i++) {
            aleatoria += banco.charAt(Math.floor(Math.random() * banco.length));
        }
        return aleatoria;
    };

    const id = cadenaAleatoria(10);

    if (nombre !== '' && apellido !== '' && mensaje !== '') {
        let user_new = nombre + ' ' + apellido;
        swal.fire({
            title: 'Gracias ' + user_new + ' 😁',
            text: `Te has registrado con éxito, este es tu credencial de acceso: ${id.toLocaleUpperCase()}`,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#157347',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            customClass: {
                cancelButton: 'outnone',
                confirmButton: 'outnone',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                form.classList.add('needs-validation')
                form.classList.remove('was-validated')
                form.reset();
            }
        });
    } else {
        form.classList.add('was-validated')
        form.classList.remove('needs-validation')
    }
}