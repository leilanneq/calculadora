
// VARIÁVEIS BOTÕES
const botaoConverter = $('[data-botao-peso]')
const botaoLimpar = $('[data-peso-limpar]')

//CONVERSOR DAS MEDIDAS
function conversor() {
    let selectEscolhido = $("[data-select-peso] option:selected").val() //variável que recebe o select escolhido
    let inputPesoDigitado = $('[data-input-peso]').val() //variável que recebe o valor digitado no input
    let inputPeso = inputPesoDigitado.replace(',','.')

    if(selectEscolhido == 1){//QUILO
        
        let quilosConvertidos = quilosCalculo(inputPeso)

        $('[data-quilo]').text(inputPeso)
        $('[data-grama]').text(quilosConvertidos[0])
        $('[data-tonelada]').text(quilosConvertidos[1])
        $('[data-libra]').text(quilosConvertidos[2])
        $('[data-onca]').text(quilosConvertidos[3])
        $('[data-stone]').text(quilosConvertidos[4])
        

    } else if (selectEscolhido == 2) {//GRAMAS
        
        let gramasConvertidas = gramasCalculo(inputPeso)

        $('[data-grama]').text(inputPeso)
        $('[data-quilo]').text(gramasConvertidas[0])
        $('[data-tonelada]').text(gramasConvertidas[1])
        $('[data-libra]').text(gramasConvertidas[2])
        $('[data-onca]').text(gramasConvertidas[3])
        $('[data-stone]').text(gramasConvertidas[4])

    } else if (selectEscolhido == 3){//TONELADAS
        
        let toneladasConvertidas = toneladasCalculo(inputPeso)

        $('[data-tonelada]').text(inputPeso)
        $('[data-quilo]').text(toneladasConvertidas[0])
        $('[data-grama]').text(toneladasConvertidas[1])
        $('[data-libra]').text(toneladasConvertidas[2])
        $('[data-onca]').text(toneladasConvertidas[3])
        $('[data-stone]').text(toneladasConvertidas[4])


    } else if (selectEscolhido == 4) { //LIBRAS
        
        let librasConvertidas = librasCalculo(inputPeso)

        $('[data-libra]').text(inputPeso)
        $('[data-quilo]').text(librasConvertidas[0])
        $('[data-grama]').text(librasConvertidas[1])
        $('[data-tonelada]').text(librasConvertidas[2])
        $('[data-onca]').text(librasConvertidas[3])
        $('[data-stone]').text(librasConvertidas[4])


    } else if (selectEscolhido == 5){ //ONÇA
        
        let oncaConvertidas = oncaCalculo(inputPeso)

        $('[data-onca]').text(inputPeso)
        $('[data-quilo]').text(oncaConvertidas[0])
        $('[data-grama]').text(oncaConvertidas[1])
        $('[data-tonelada]').text(oncaConvertidas[2])
        $('[data-libra]').text(oncaConvertidas[3])
        $('[data-stone]').text(oncaConvertidas[4])


    } else if (selectEscolhido == 6) { //STONE
        
        let stoneConvertidos = stoneCalculo(inputPeso)
        
        $('[data-stone]').text(inputPeso)
        $('[data-quilo]').text(stoneConvertidos[0])
        $('[data-grama]').text(stoneConvertidos[1])
        $('[data-tonelada]').text(stoneConvertidos[2])
        $('[data-libra]').text(stoneConvertidos[3])
        $('[data-onca]').text(stoneConvertidos[4])
        

    }
    else {
        console.log ("ainda não funciono")
        console.log(selectEscolhido)
    }
    //ADICIONA CLASSE PARA EXIBIR A TABELA COM OS RESULTADOS
    $('[data-resultado-peso]').addClass("resultado-exibir")
}

//LIMPAR OS DADOS
function limparBotao() {
    $('[data-input-peso]').val("")
    $('[data-resultado-peso]').removeClass("resultado-exibir")
}

//BOTÕES - CLICK
botaoConverter.click(conversor) //variável de botao com a função de converter ao clicar
botaoLimpar.click(limparBotao)

//FUNÇÕES DE CALCULOS 

function quilosCalculo(inputPeso){

    var grama = inputPeso*1000
    var tonelada = inputPeso/1000
    var libra = inputPeso*2.205
    var onca = inputPeso*35.274
    var stone = inputPeso/6.35

    return [parseFloat(grama.toFixed(3)), parseFloat(tonelada.toFixed(3)), parseFloat(libra.toFixed(3)), parseFloat(onca.toFixed(3)), parseFloat(stone.toFixed(3))] //retorna um array com os resultados
}

function gramasCalculo(inputPeso){

    var quilo = inputPeso/1000
    var tonelada = inputPeso/1000000
    var libra = inputPeso/454
    var onca = inputPeso/28.35
    var stone = inputPeso/6350

    return [parseFloat(quilo.toFixed(3)), parseFloat(tonelada.toFixed(3)), parseFloat(libra.toFixed(3)), parseFloat(onca.toFixed(3)), parseFloat(stone.toFixed(3))] //retorna um array com os resultados
}

function toneladasCalculo(inputPeso){

    var quilo = inputPeso*1000
    var grama = inputPeso/0.0000010000
    var libra = inputPeso*2205
    var onca = inputPeso*35274
    var stone = inputPeso*157

    return [parseFloat(quilo.toFixed(3)), parseFloat(grama.toFixed(3)), parseFloat(libra.toFixed(3)), parseFloat(onca.toFixed(3)), parseFloat(stone.toFixed(3))] //retorna um array com os resultados
}

function librasCalculo(inputPeso){

    var quilo = inputPeso/2.205
    var grama = inputPeso*454
    var tonelada = inputPeso/2205
    var onca = inputPeso*16
    var stone = inputPeso/14

    return [parseFloat(quilo.toFixed(3)), parseFloat(grama.toFixed(3)), parseFloat(tonelada.toFixed(3)), parseFloat(onca.toFixed(3)), parseFloat(stone.toFixed(3))] //retorna um array com os resultados
}

function oncaCalculo(inputPeso){

    var quilo = inputPeso/35.274
    var grama = inputPeso*28.35
    var tonelada = inputPeso/35274
    var libra = inputPeso/16
    var stone = inputPeso/224

    return [parseFloat(quilo.toFixed(3)), parseFloat(grama.toFixed(3)), parseFloat(tonelada.toFixed(3)), parseFloat(libra.toFixed(3)), parseFloat(stone.toFixed(3))] //retorna um array com os resultados
}

function stoneCalculo(inputPeso){

    var quilo = inputPeso*6.35
    var grama = inputPeso*6350
    var tonelada = inputPeso/157
    var libra = inputPeso*14
    var onca = inputPeso*224

    return [parseFloat(quilo.toFixed(3)), parseFloat(grama.toFixed(3)), parseFloat(tonelada.toFixed(3)), parseFloat(libra.toFixed(3)), parseFloat(onca.toFixed(3))] //retorna um array com os resultados. ParseFloat para ter 3 numero após virgula
}

//MÁSCARA DE DECIMAIS
$('[data-input-peso]').maskMoney({ allowNegative: false, thousands: '.', decimal: ',' });