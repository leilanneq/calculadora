function testeeeee(objeto){
    console.log('testeeeeeeeeeeeee', objeto)

    SimpleMaskMoney.setMask(objeto, {
        prefix: 'R$ ', //o que vem antes do valor
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end' //para começar a digitar do final
    })
}