function CtoF(c)
{
  let value=c*9/5+32
  return value.toFixed(2)+" °F"
}

function CtoR(c)
{
  let value=c*4/5
  return value.toFixed(2)+" °R"
}


function CtoK(c)
{
  let value=c+273
  return value.toFixed(2)+" °K"
}

function FtoC(f)
{
  let value=(f-32)*5/9
  return value.toFixed(2)+" °C"
}

function FtoR(f)
{
 let value=(f-32)*4/9
  return value.toFixed(2)+" °R" 
}

function FtoK(f)
{
 let value=((f-32)*5/9)+273
  return value.toFixed(2)+" °K" 
}

function RtoC(r)
{
 let value=r*5/4
  return value.toFixed(2)+" °C" 
}

function RtoF(r)
{
  let value=r*9/4+32
  return value.toFixed(2)+" °F"
}

function RtoK(r)
{
  let value=r*5/4+273
  return value.toFixed(2)+" °K"
}

function KtoC(k)
{
 let value=k-273
  return value.toFixed(2)+" °C" 
}

function KtoF(k)
{
 let value=((k-273)*9/5)+32
  return value.toFixed(2)+" °F" 
}

function KtoR(k)
{
 let value=(k-273)*4/5
  return value.toFixed(2)+" °R" 
}

function convert(x)
{
 if (document.getElementById('type1').value =="celsius" && document.getElementById('type2').value =="celsius")
 {
  document.getElementById("temp2").value = x+"°C"
   alert(x+" °C")
 }
  else if (document.getElementById('type1').value =="fahrenheit" && document.getElementById('type2').value =="fahrenheit")
 {
  document.getElementById("temp2").value = x+"°F"
   alert(x+" °F")
 }
  else if(document.getElementById('type1').value =="reaumur" && document.getElementById('type2').value =="reaumur")
 {
  document.getElementById("temp2").value = x+"°R"
   alert(x+" °R")
 }
  else if (document.getElementById('type1').value =="kelvin" && document.getElementById('type2').value =="kelvin")
 {
  document.getElementById("temp2").value = x+"°K"
   alert(x+" °K")
 }
  else if (document.getElementById('type1').value =="celsius" && document.getElementById('type2').value =="fahrenheit")
 {
  document.getElementById("temp2").value = CtoF(x)
   alert(CtoF(x))
 }
   else if (document.getElementById('type1').value =="celsius" && document.getElementById('type2').value =="reaumur")
 {
  document.getElementById("temp2").value = CtoR(x)
   alert(CtoR(x))
 }
   else if (document.getElementById('type1').value =="celsius" && document.getElementById('type2').value =="kelvin")
 {
  document.getElementById("temp2").value = CtoK(x)
   alert(CtoK(x))
 } 
   else if (document.getElementById('type1').value =="fahrenheit" && document.getElementById('type2').value =="celsius")
 {
  document.getElementById("temp2").value = FtoC(x)
   alert(FtoC(x))
 } 
   else if (document.getElementById('type1').value =="fahrenheit" && document.getElementById('type2').value =="reaumur")
 {
  document.getElementById("temp2").value = FtoR(x)
   alert(FtoR(x))
 } 
   else if (document.getElementById('type1').value =="fahrenheit" && document.getElementById('type2').value =="kelvin")
 {
  document.getElementById("temp2").value = FtoK(x)
   alert(FtoK(x))
 }
   else if (document.getElementById('type1').value =="reaumur" && document.getElementById('type2').value =="celsius")
 {
  document.getElementById("temp2").value = RtoC(x)
   alert(RtoC(x))
 }
   else if (document.getElementById('type1').value =="reaumur" && document.getElementById('type2').value =="fahrenheit")
 {
  document.getElementById("temp2").value = RtoF(x)
   alert(RtoF(x))
 } 
   else if (document.getElementById('type1').value =="reaumur" && document.getElementById('type2').value =="kelvin")
 {
  document.getElementById("temp2").value = RtoK(x)
   alert(RtoK(x))
 } 
   else if (document.getElementById('type1').value =="kelvin" && document.getElementById('type2').value =="celsius")
 {
  document.getElementById("temp2").value = KtoC(x)
   alert(KtoC(x))
 } 
   else if (document.getElementById('type1').value =="kelvin" && document.getElementById('type2').value =="fahrenheit")
 {
  document.getElementById("temp2").value = KtoF(x)
   alert(KtoF(x))
 } 
   else if (document.getElementById('type1').value =="kelvin" && document.getElementById('type2').value =="reaumur")
 {
  document.getElementById("temp2").value = KtoR(x)
   alert(KtoR(x))
 } 
}