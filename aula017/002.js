let idades = [18, 25, 32, 11, 9, 45]

var idade = idades[0];

let somaDasIdades = 0;
for(let indice = 0; indice < somaDasIdades.length; indice++) {
    let idade = idades[indice];
    somaDasIdades = somarIdades(somaDasIdades, idade);
}

console.log("Soma das idades: ", somaDasIdades);

function verificaSeEMaiorDeIdade(idade){
    return idade >= 18;
}

function somarIdades(somatorio, idade) {
    let nossoTesteEscopo = "variável declarada dentro do if";
    return somatorio + idade;
}

console.log(nossoTesteEscopo)