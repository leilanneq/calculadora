const botao = $('[data-distancia-botao]')
const input = $('[data-distancia-input]')

function conversor(evento) {
    evento.preventDefault()

    let distancia = input.val()

    if ($("#km").is(":checked")) {

        let milhasDigitado = distancia / 1.6
        let milhas = parseFloat(milhasDigitado.toFixed(2))
        $('[data-distancia-valor]').text(milhas)
        $('[data-distancia-medida]').text("milhas")

    } else if (($("#milhas").is(":checked")))  {

        let kmDigitado = distancia * 1.6
        let km = parseFloat(kmDigitado.toFixed(2))
        $('[data-distancia-valor]').text(km)
        $('[data-distancia-medida]').text("quilômetros")
    }

    $('[data-resultado-distancia]').addClass("distancia__resultado-on")
    
}

botao.click(conversor)