// джаваскрипт реєстрації
let fwin = document.getElementById('win')
function fail(){ //показує помилку
  fwin.classList.add('op') 
}
function closfail(){ //ховає
  fwin.classList.remove('op')
}
document.getElementById('opb').addEventListener('click', fail) //реєструє натискання
document.getElementById('cbu').addEventListener('click', closfail) //теж реєструє натискання але вже закриває