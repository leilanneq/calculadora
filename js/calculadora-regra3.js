const inputPrim = $('[data-regra3-prim]')
const inputSeg = $('[data-regra3-seg]')
const inputTer = $('[data-regra3-ter]')
const labelResult = $('[data-regra3-result]')

$(document).ready(function(){
    conversor()
})

function conversor(evento) {
    //evento.preventDefault()
    inputTer.on("input", function(){
        
        let resultadoFloat = (inputTer.val() * inputSeg.val()) / inputPrim.val()
        let resultado = parseFloat(resultadoFloat.toFixed(2))
        labelResult.text(resultado)

        
    })

    
}
