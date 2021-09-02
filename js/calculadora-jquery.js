var texto = $('[data-texto]')

var twitter = $('[data-twitter]').text()
var instagram = $('[data-instagram]').text()
var facebook = $('[data-facebook]').text()
var whatsapp = $('[data-whatsapp]').text()
var pinterest = $('[data-pinterest]').text()
var sms = $('[data-sms]').text()
console.log(facebook , twitter, instagram, whatsapp, pinterest, sms)


$(document).ready(function(){ //iniciar a função quanto o documento terminar de ser carregado
    contador()
})

function contador() { //função responsável pelos contadoress
    texto.on("input", function() {

        
        var conteudo = texto.val()
        var qntPalavras = conteudo.split(/\S+/).length - 1 //A expressão regular que busca qualquer caractere, exceto espaço vazio. -1 pq ele já inicializa com 1
        $('[data-cont-palavra]').text(qntPalavras)
    
        var qntCaracteres = conteudo.length
        $('[data-cont-carac]').text(qntCaracteres)

        // redes sociais
        $('[data-twitter]').text(twitter-qntCaracteres)
        $('[data-instagram]').text(instagram-qntCaracteres)
        $('[data-facebook]').text(facebook-qntCaracteres)
        $('[data-whatsapp]').text(whatsapp-qntCaracteres)
        $('[data-pinterest]').text(pinterest-qntCaracteres)
        $('[data-sms]').text(sms-qntCaracteres)

        //twitter
        if ((qntCaracteres) >= (twitter)){
            $("[data-twitter]").addClass("palavras__item-redes-vermelho")
            $("[data-twitter]").removeClass("palavras__item-redes-amarelo")
        }else if ((qntCaracteres) >= (0.8*twitter)) {
            $("[data-twitter]").addClass("palavras__item-redes-amarelo")
            $("[data-twitter]").removeClass("palavras__item-redes-vermelho")
            
        } else {
            $("[data-twitter]").removeClass("palavras__item-redes-amarelo")
            $("[data-twitter]").removeClass("palavras__item-redes-vermelho")
        }

        //instagram
        if ((qntCaracteres) >= (instagram)){
            $("[data-instagram]").addClass("palavras__item-redes-vermelho")
            $("[data-instagram]").removeClass("palavras__item-redes-amarelo")
        }else if ((qntCaracteres) >= (0.8*instagram)) {
            $("[data-instagram]").addClass("palavras__item-redes-amarelo")
            $("[data-instagram]").removeClass("palavras__item-redes-vermelho")
            
        } else {
            $("[data-instagram]").removeClass("palavras__item-redes-amarelo")
            $("[data-instagram]").removeClass("palavras__item-redes-vermelho")
        }

        //FACEBOOK
        if ((qntCaracteres) >= (facebook)){
            $("[data-facebook]").addClass("palavras__item-redes-vermelho")
            $("[data-facebook]").removeClass("palavras__item-redes-amarelo")
        }else if ((qntCaracteres) >= (0.8*facebook)) {
            $("[data-facebook]").addClass("palavras__item-redes-amarelo")
            $("[data-facebook]").removeClass("palavras__item-redes-vermelho")
            
        } else {
            $("[data-facebook]").removeClass("palavras__item-redes-amarelo")
            $("[data-facebook]").removeClass("palavras__item-redes-vermelho")
        }
        
        //WHATSAPP
        if ((qntCaracteres) >= (whatsapp)){
            $("[data-whatsapp]").addClass("palavras__item-redes-vermelho")
            $("[data-whatsapp]").removeClass("palavras__item-redes-amarelo")
        }else if ((qntCaracteres) >= (0.8*whatsapp)) {
            $("[data-whatsapp]").addClass("palavras__item-redes-amarelo")
            $("[data-whatsapp]").removeClass("palavras__item-redes-vermelho")
            
        } else {
            $("[data-whatsapp]").removeClass("palavras__item-redes-amarelo")
            $("[data-whatsapp]").removeClass("palavras__item-redes-vermelho")
        }
        
        //PINTEREST
        if ((qntCaracteres) >= (pinterest)){
            $("[data-pinterest]").addClass("palavras__item-redes-vermelho")
            $("[data-pinterest]").removeClass("palavras__item-redes-amarelo")
        }else if ((qntCaracteres) >= (0.8*pinterest)) {
            $("[data-pinterest]").addClass("palavras__item-redes-amarelo")
            $("[data-pinterest]").removeClass("palavras__item-redes-vermelho")
            
        } else {
            $("[data-pinterest]").removeClass("palavras__item-redes-amarelo")
            $("[data-pinterest]").removeClass("palavras__item-redes-vermelho")
        }
        
        //SMS
        if ((qntCaracteres) >= (sms)){
            $("[data-sms]").addClass("palavras__item-redes-vermelho")
            $("[data-sms]").removeClass("palavras__item-redes-amarelo")
        }else if ((qntCaracteres) >= (0.8*sms)) {
            $("[data-sms]").addClass("palavras__item-redes-amarelo")
            $("[data-sms]").removeClass("palavras__item-redes-vermelho")
            
        } else {
            $("[data-sms]").removeClass("palavras__item-redes-amarelo")
            $("[data-sms]").removeClass("palavras__item-redes-vermelho")
        }
    })
}


function botao(){
    texto.val(""); //apaga o texto, muda o valor input pra " "
     $("[data-cont-palavra]").text("0") //muda o texto para 0
     $("[data-cont-carac]").text("0")
     $('[data-twitter]').text(twitter).removeClass("palavras__item-redes-vermelho palavras__item-redes-amarelo")
     $('[data-instagram]').text(instagram).removeClass("palavras__item-redes-vermelho palavras__item-redes-amarelo")
     $('[data-facebook]').text(facebook).removeClass("palavras__item-redes-vermelho palavras__item-redes-amarelo")
     $('[data-whatsapp]').text(whatsapp).removeClass("palavras__item-redes-vermelho palavras__item-redes-amarelo")
     $('[data-pinterest]').text(pinterest).removeClass("palavras__item-redes-vermelho palavras__item-redes-amarelo")
     $('[data-sms]').text(sms).removeClass("palavras__item-redes-vermelho palavras__item-redes-amarelo")
}

$("[data-botao-limpar]").click(botao) //pega o botão e adiciona função no clique