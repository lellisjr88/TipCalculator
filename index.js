function formatMoney(valor){
    Math.ceil(valor * 100) / 100 //Arredonda os valores das últimas casas decimais, pra cima.
    valor = valor.toFixed(2)
    return 'R$ ' + valor
}

function formatPeople(valor){
    if (valor == 1) return valor + ' Person'
    return valor + ' People'
}


const main = document.getElementById('main');

main.addEventListener('input',function(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = Number(document.getElementById('tipInput').value)
    let split = Number(document.getElementById('splitInput').value)
       
    let tipValue = bill * (tipPercent / 100)
    const billTotal = bill + tipValue
    const billEach = billTotal/split 

    const tip_percent = document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    const tipNum = document.getElementById('splitValue').innerHTML = formatPeople(split)

    const resultTip = document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    const resultBillTotal = document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    const resultBillEach = document.getElementById('billEach').innerHTML = formatMoney(billEach)
})



