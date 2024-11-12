let celciusidEl=document.getElementById("celciusid")
let fahrenheatidEl=document.getElementById("Fahrenheatid")
let KelvinidEl = document.getElementById("Kelvinid")
let clearbtnidEl=document.getElementById("clearbtnid")

function roundnum(num){
    return Math.round(num*100)/100
}

celciusidEl.addEventListener('input',function(){
    let numcelcius=parseFloat(celciusidEl.value)
    fahrenheatidEl.value=roundnum((numcelcius*(9/5))+32)
    KelvinidEl.value=roundnum(numcelcius+273.15)
})

fahrenheatidEl.addEventListener('input',function(){
    let numfarhenheit=parseFloat(fahrenheatidEl.value)
    celciusidEl.value=roundnum((numfarhenheat-32)*(5/9))
    KelvinidEl.value=roundnum((numfarhenheat-32)*(5/9)+(273.15))
})

KelvinidEl.addEventListener('input',function(){
    let numkelvin=parseFloat(KelvinidEl.value)
    fahrenheatidEl.value=roundnum((numkelvin - 273.15) * (9/5) + 32)
    celciusidEl.value=roundnum(numkelvin - 273.15)
})

function clearbtn(){
    celciusidEl.value = ""
    fahrenheatidEl.value=""
    KelvinidEl.value=""
}
