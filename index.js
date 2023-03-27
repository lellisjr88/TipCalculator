function formatMoney(valor){
    valor = valor.toFixed(2)
    return 'R$ ' + valor
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
    const tipNum = document.getElementById('splitValue').innerHTML = split + ' Person'

    const resultTip = document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    const resultBillTotal = document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    const resultBillEach = document.getElementById('billEach').innerHTML = formatMoney(billEach)
})



