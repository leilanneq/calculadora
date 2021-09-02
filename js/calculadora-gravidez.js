const botao = $('[data-botao-gravidez]')
const input =$('[data-input-gravidez]')

$(document).ready(function(){
    conversor()
})


function conversor(evento) {
    //evento.preventDefault()//para evitar de carregar a página
    
    input.on("input", function(){

        
        let semanas = input.val()
        
        if (semanas <= 0) {
            $('#mes').text("Ainda não está grávida")
            $('#plural').text("")
        } else if ( ((semanas > 0)) && (semanas <= 4)) {
            $('#mes').text("1")
            $('#plural').text("mês")
        } else if ((semanas > 4) &&  (semanas <= 8)) {
            $('#mes').text("2")
            $('#plural').text("meses")
        } else if ((semanas > 8 && (semanas <=12))){
            $('#mes').text("3")
            $('#plural').text("meses")
        } else if ((semanas > 12) && (semanas <= 16)){
            $('#mes').text("4")
            $('#plural').text("meses")
        } else if ((semanas > 16) && (semanas <=21 ) ) {
            $('#mes').text("5")
            $('#plural').text("meses")
        } else if ((semanas > 21) && (semanas <= 26) ) {
            $('#mes').text("6")
            $('#plural').text("meses")
        } else if ((semanas > 26) && (semanas <= 30) ) {
            $('#mes').text("7")
            $('#plural').text("meses")
        } else if ((semanas > 30) && (semanas <= 35)) {
            $('#mes').text("8")
            $('#plural').text("meses")
        } else if ((semanas > 35) && (semanas <= 40 )) {
            $('#mes').text("9")
            $('#plural').text("meses")
        } else {
            
            $('#mes').text(" Passou dos 9")
            $('#plural').text("meses")
            
        }
        
        $('[data-resultado-gravidez]').addClass("gravidez__resultado-in")
    })

}


//Função clique do botao 

botao.click(conversor)