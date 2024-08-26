const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none"

}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada


}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(texArea.value)
    mensaje.value = textoEncriptado
    texArea.value = "";
     mensaje.style.backgroundImage = "none"


}



function desencriptar(strindDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    strindDesencriptada = strindDesencriptada.toLowerCase()

    for(let i= 0; i < matrizCodigo.length; i++){
        if(strindDesencriptada.includes(matrizCodigo[i][1])){
            strindDesencriptada = strindDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return  strindDesencriptada
}