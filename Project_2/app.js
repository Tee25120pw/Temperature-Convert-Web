function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}

function CeltoFahrenheit(celsius){
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + "°F"
}
function CeltoKelvin(celsius){
    let value = celsius + 273
    return value.toFixed(2) + "°K"
}

function FahtoCelsius(faharenheit){
    let value = (faharenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C"
}
function FahtoKelvin(faharenheit){
    let value = ((faharenheit - 32) * (5 / 9)) + 273
    return value.toFixed(2) + "°K"
}

function KeltoCelsius(kelvin){
    let value = kelvin - 273
    return value.toFixed(2) + "°C"
}
function KeltoFahrenheit(kelvin){
    let value = ((kelvin - 273) * (9 / 5)) + 32
    return value.toFixed(2) + "°F"
}


function CeltoFahrenheitprogram(value){
    alert(CeltoFahrenheit(value))
}
function CeltoKelvinprogram(value){
    alert(CeltoKelvin(value))
}

function FahtoCelsiusprogram(value){
    alert(FahtoCelsius(value))
}
function FahtoKelvinprogram(value){
    alert(FahtoKelvin(value))
}

function KeltoCelsiusprogram(value){
    alert(KeltoCelsius(value))
}
function KeltoFahrenheitprogram(value){
    alert(KeltoFahrenheit(value))
}

