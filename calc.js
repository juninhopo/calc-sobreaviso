//Calculadora da base do sobreaviso de empresas.

let salario = 4200
let horTrab = 172
let horTrabSobre = 180

console.log("Horas de trabalho normal: ", horTrab)
console.log("Horas de trabalho de sobreaviso: ", horTrabSobre)

console.log("Valor do Salario: ", salario)

let valorHora = salario / horTrab
console.log("Valor da hora normal: ", valorHora)

//A remuneracao do sobreaviso e equivalente a 1/3 do .
let remSobreaviso = salario / 3
console.log("Valor da remuneracao de sobreaviso: ", remSobreaviso)

let horSobre = remSobreaviso / horTrabSobre 
console.log("Valor da hora de sobreaviso: ", horSobre)

let remTotalSobreAviso = horSobre * horTrabSobre
console.log("Valor base dos plantoes do mes de sobreaviso: ", remTotalSobreAviso)