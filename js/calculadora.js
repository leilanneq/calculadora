
(() => {
//MÁSCARA PARA DINHEIRO

// const args = {
//     prefix: 'R$',
//     fixed: true,
//     fractionDigits: 2,
//     decimalSeparator: ',',
//     thousandsSeparator: '.',
//     cursor: 'end'
//   };
// const inputs = document.querySelectorAll('input') 
// const mascara = SimpleMaskMoney.setMask(inputs, args)

// mascara.formatToNumber()

    

// CALCULOS SOBRE GASOLINA OU ETANOL

const calculoGasolinaEtanol = (evento) => {

    evento.preventDefault() //para evitar de carregar a página

    const inputGasolinaEtanol = document.querySelector('[data-input-gasolina]')
    const digitadoGasolinaEtanol = inputGasolinaEtanol.value 
    const valorGasolinaEtanol = digitadoGasolinaEtanol.replace(",",".")

    const inputEtanolGasolina = document.querySelector('[data-input-etanol]')
    const digitadoEtanolGasolina = inputEtanolGasolina.value //valor do input
    const valorEtanolGasolina = digitadoEtanolGasolina.replace(',','.')

    const percentualGasolina = valorEtanolGasolina/valorGasolinaEtanol //faz calculo dos valores digitados no input
    const valorCompensa = valorGasolinaEtanol*0.7
    const valorCompensaArredondado = parseFloat(valorCompensa.toFixed(2))
    const divResultadoEtanol = document.querySelector('[data-resultado-etanol]')
    const resultadoEtanol = document.createElement('p')
    resultadoEtanol.classList.add('gasolina__resultado') //adicionar classe do css no elemento que vai ser inserido no html

    //const conteudoResultadoEtanol = `<p> ${percentualGasolina} </p>`

    //divResultadoEtanol.innerHTML = conteudoResultadoEtanol

    
    if (percentualGasolina >= 0.7) {
        divResultadoEtanol.innerHTML = `<p> GASOLINA <br> <br> Com a gasolina no valor de R$ ${valorGasolinaEtanol}, compensaria escolher o etanol se ele estivesse menos do que R$${valorCompensaArredondado}. </p>`
    } else {
        divResultadoEtanol.innerHTML = `<p> ETANOL <br> <br> Com a gasolina no valor de R$ ${valorGasolinaEtanol}, o etanol compensa por estar menos de R$${valorCompensaArredondado}. </p>`
    }  


}

const botaoEtanol = document.querySelector('[data-botao-etanol]')
botaoEtanol.addEventListener('click', calculoGasolinaEtanol)

//CALCULOS SOBRE LITROS DE GASOLINA

const calculoLitrosGasolina = (evento) => {

    evento.preventDefault () //para evitar de carregar a página

    const inputGasolinaLitro = document.querySelector('[data-input-valor-litro]')
    const digitadoGasolinaLitro = inputGasolinaLitro.value
    const valorGasolinaLitro = digitadoGasolinaLitro.replace(',','.')

    const inputAbastecido = document.querySelector('[data-input-total-valor-abastecido]')
    const digitadoAbastecido = inputAbastecido.value
    const valorAbastecido = digitadoAbastecido.replace(',','.')

    const calculoLitros = valorAbastecido/valorGasolinaLitro
    const litrosArredondado = parseFloat(calculoLitros.toFixed(2))

    const divResultadoLitros = document.querySelector('[data-resultado-litros]')
    const resultadoLitros = document.createElement('p')
    resultadoLitros.classList.add('gasolina__resultado')

    divResultadoLitros.innerHTML = `<p> Você abasteceu ${litrosArredondado} litros. </p>`


}
 const botaoLitros = document.querySelector('[data-botao-litros]')
 botaoLitros.addEventListener('click', calculoLitrosGasolina)


 //CALCULOS SOBRE ECONOMIA DE GASOLINA

 const calculoEconomiaGasolina = (evento) => {

    evento.preventDefault() //para evitar de carregar a página

    const inputGasolinaBarata = document.querySelector('[data-input-gasolina-barata]')
    const digitadoGasolinaBarata = inputGasolinaBarata.value
    const valorGasolinaBarata = digitadoGasolinaBarata.replace(',','.')

    const inputGasolinaCara = document.querySelector('[data-input-gasolina-cara]')
    const digitadoGasolinaCara = inputGasolinaCara.value
    const valorGasolinaCara = digitadoGasolinaCara.replace(',','.')

    const inputAbastecer = document.querySelector('[data-input-valor-abastecer]')
    const digitadoAbastecer = inputAbastecer.value
    const valorAbastecer = digitadoAbastecer.replace(',','.')

    const litrosGasolinaBarata = valorAbastecer / valorGasolinaBarata
    const litrosGasolinaCara = valorAbastecer / valorGasolinaCara
    const diferencaLitros = litrosGasolinaBarata - litrosGasolinaCara //diferença de litros que seriam abastecidos pelo mesmo valor
    const diferencaLitrosArredondado = parseFloat(diferencaLitros.toFixed(2))

    const valorEconomizado = litrosGasolinaCara * valorGasolinaBarata //calcula economia em litros

    const economiaReais = valorAbastecer - valorEconomizado //calcula economia em reais
    const economiaReaisArredondado = parseFloat(economiaReais.toFixed(2))

    console.log(economiaReaisArredondado)

    const divResultadoEconomia = document.querySelector('[data-resultado-economia]')
    const resultadoEconomia = document.createElement('p')
    resultadoEconomia.classList.add('gasolina__resultado')

    divResultadoEconomia.innerHTML = `<p>Economia de R$${economiaReaisArredondado}.<br> <br> Ao abastacer por R$${valorGasolinaBarata} na gasolina mais barata, a economia será de R$${economiaReaisArredondado} pela mesma quantidade de litros. A diferença é de ${diferencaLitrosArredondado} litros pelo mesmo valor! </p>`
 }

 const botaoEconomia = document.querySelector('[data-botao-economia]')
 botaoEconomia.addEventListener('click', calculoEconomiaGasolina)
})()

$('[data-input-etanol]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })
$('[data-input-gasolina]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })

$('[data-input-valor-litro]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })
$('[data-input-total-valor-abastecido]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })

$('[data-input-gasolina-barata]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })
$('[data-input-gasolina-cara]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })
$('[data-input-valor-abastecer]').maskMoney({ prefix: 'R$ ', allowNegative: true, thousands: '.', decimal: ',', affixesStay: false })
