const inputKm = $('[data-distancia-km]')
const inputMilhas = $('[data-distancia-milhas]')

$(document).ready(function(){
    conversor()
})

function conversor(evento) {
    
    inputKm.on("input", function(){//km para milhas
        
        let distancia = inputKm.val()

        let kmDigitado = distancia / 1.6
        let milhas = parseFloat(kmDigitado.toFixed(2))
        $('[data-distancia-milhas]').val(milhas)
        
    })

    inputMilhas.on("input", function(){//milhas para km

        let distancia = inputMilhas.val()

        let milhasDigitado = distancia * 1.6
        let km = parseFloat(milhasDigitado.toFixed(2))
        $('[data-distancia-km]').val(km)
    })
    
}
