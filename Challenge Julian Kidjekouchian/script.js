

const inputTexto = document.querySelector(".input-text");
const mensaje= document.querySelector(".input-text-area");

function btnencriptar(){

	const textoEncriptado= encriptar (inputTexto.value);
	mensaje.value = textoEncriptado;

}

function btndesencriptar(){

	const textoDesencriptado= desencriptar (inputTexto.value);
	mensaje.value = textoDesencriptado;

}


function encriptar (StringParaEncriptar){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
	StringParaEncriptar = StringParaEncriptar.toLowerCase();

	for (let i = 0 ; i< matrizCodigo.length; i++){
			if (StringParaEncriptar.includes(matrizCodigo[i][0])){
				StringParaEncriptar=StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
			}
	}

	return StringParaEncriptar;
}

function desencriptar (StringParaDesencriptar){
	let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
	StringParaDesencriptar = StringParaDesencriptar.toLowerCase();

	for (let i = 0 ; i< matrizCodigo.length; i++){
			if (StringParaDesencriptar.includes(matrizCodigo[i][1])){
				StringParaDesencriptar=StringParaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
			}

	}
	
	return StringParaDesencriptar;
}


function myFunction() {
  document.getElementById("myDIV").style.display = "none";
}


const button = document.querySelector('#botonCopiar');
const input= document.querySelector('.input-text-area');

button.addEventListener('click', function(){
	input.focus();
	document.execCommand('selectAll');
	document.execCommand('copy');
	
})