const formRegistro = document.querySelector ("#formRegistro")
const inputUserName = document.querySelector  ("#inputUserName")
const inputUserPass = document.querySelector  ("#inputUserPass")

function validarUsuario(e) {
    e.preventDefault()
  
    let usuarioLocal = localStorage.getItem("user")
    let passwordLocal = localStorage.getItem("password")

    if(usuarioLocal === inputUserName.value && passwordLocal === inputUserPass.value){
        console.log("Bienvenido")
        localStorage.setItem("activo", true)
        window.location = "..//vistas/curso.html" 
    }else{
        console.log("datos incorrectos")
    }
        formRegistro.reset()
}
formRegistro.addEventListener("submit", validarUsuario)

