const botao = $('[data-temperatura-botao]')
const input = $('[data-temperatura-input]')

$(document).ready(function(){
    conversor()
})

function conversor(evento) {
    //evento.preventDefault()
    input.on("input", function(){
        
        let temperatura = input.val()
        
        if ($("#celsius").is(":checked")) {
            
            let fahrenFloat = temperatura * 1.8 +32
            let fahren = parseFloat(fahrenFloat.toFixed(2))
            
            $('[data-temperatura-valor]').text(fahren)
            $('[data-temperatura-teste]').val(fahren)
            $('[data-temperatura-medida]').text("°F")
            
        } else if (($("#fahrenheit").is(":checked")))  {
            
            let celsiusFloat = (temperatura - 32) / 1.8
            let celsius = parseFloat(celsiusFloat.toFixed(2))
            $('[data-temperatura-valor]').text(celsius)
            $('[data-temperatura-medida]').text("°C")
        }
        
        $('[data-resultado-temperatura]').addClass("temperatura__resultado-on")
    })
    
}


//botao.click(conversor)