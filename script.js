// var x = [1,2,3];
// var y = [10,20,30];

var x = [];
var y = [];

const html = document.querySelector('#inputs')
const mes = document.querySelector('#mes')
const valor = document.querySelector('#valor')
const botaoOk = document.querySelector('#send')
const clear = document.querySelector('#clear')
const botaoCalcula = document.querySelector('#calcula')
const resultadoHTML = document.querySelector('#resultado')
const mesAPrever = document.querySelector('#mesAPrever')

//Função invocada quando o botão Ok é pressionado
function enviar() {
    x.push(parseInt(mes.value)) //Adiciona o valor do input no array X
    y.push(parseInt(valor.value)) //Adiciona o valor do input no array Y

    //Mostra os arrays depois dos pushs
    html.innerHTML = `<p>Meses: ${x.join()}</p>` 
    html.innerHTML += `<p>Valores: ${y.join()}</p>`

    //Reseta os valores dos inputs
    mes.value = ''
    valor.value = ''
}

//Função invocada quando o botão Limpar valores é pressionado
function clean(){
    x = []
    y = []

    html.innerHTML = `<p>Meses: ${x.join()}</p>` 
    html.innerHTML += `<p>Valores: ${y.join()}</p>`
}

botaoOk.addEventListener('click', enviar)
clear.addEventListener('click', clean)


html.innerHTML += `<p>Meses: ${x.join()}</p>` 
html.innerHTML += `<p>Valores: ${y.join()}</p>` 


function produto(x, y) {
    var ret = [];
    for ( var i = 0 ; i < x.length ; i++ )
        ret.push(x[i] * y[i]);
    return ret;
}

function quadrados(x) {
    var ret = [];
    for ( var i = 0 ; i < x.length ; i++ )
        ret.push(x[i] * x[i]);
    return ret;
}

function somatorio(x) {
    var ret = 0;
    for ( var i = 0 ; i < x.length ; i++ )
        ret += x[i];
    return ret;
}





function mostraResultado(){
    

    function media(x) { return somatorio(x) / x.length; }

    var m = somatorio(produto(x,y)) - somatorio(x) * somatorio(y) / x.length;
    m /= somatorio(quadrados(x)) - somatorio(x)*somatorio(x) / x.length;

    var b = media(y) - m * media(x);

    const resultado = m * mesAPrever.value + b;

    console.log(resultado);

    resultadoHTML.innerHTML = `Resultado: ${resultado}` 
}

botaoCalcula.addEventListener('click', mostraResultado)