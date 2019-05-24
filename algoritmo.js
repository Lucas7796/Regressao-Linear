var x = [2,3,4];
var y = [40,60,80];

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

function media(x) { return somatorio(x) / x.length; }

//O m é o ponto de interceptação da linha de regressão ao eixo y
var m = somatorio(produto(x,y)) - somatorio(x) * somatorio(y) / x.length;
m /= somatorio(quadrados(x)) - somatorio(x)*somatorio(x) / x.length;


// o b é a inclinação da linha de regressão 
var b = media(y) - m * media(x);

var y = m*5 + b;
console.log("resultado previsto: ");
console.log(y);