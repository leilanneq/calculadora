const botao = $('[data-temperatura-botao]')
const inputCel = $('[data-temperatura-celsius]')
const inputFar = $('[data-temperatura-faren]')

$(document).ready(function(){
    conversor()
})

function conversor(evento) {
    //evento.preventDefault()
    inputCel.on("input", function(){
        
        let temperatura = inputCel.val()
        let fahrenFloat = temperatura * 1.8 +32
        let fahren = parseFloat(fahrenFloat.toFixed(2))
        inputFar.val(fahren)
        
    })

    inputFar.on("input", function(){

        let temperatura = inputFar.val()
        let celsiusFloat = (temperatura - 32) / 1.8
        let celsius = parseFloat(celsiusFloat.toFixed(2))
        inputCel.val(celsius)

    })
    
}



//botao.click(conversor)