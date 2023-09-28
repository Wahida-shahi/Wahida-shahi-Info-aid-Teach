// // function temperatureConverter(valNum) {
// //   valNum = parseFloat(valNum);
// //   document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
// // }
// const form=document.querySelector('form');
// const input=document.getElementById('temp');
// const select=document.getElementById('temp_diff');
// const resultcontainer=document.getElementById('resultcontainer');
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
// const temperature=input.value;
// const temperatureType=select.value;

// let convertedtemperature;
// if(temperatureType===cel)
// {
//   convertedtemperature=(temperature-32)/1.8;
//   resultcontainer.textContent=`${temperature}°F = ${convertedtemperature}°C`;
//   //valNum = parseFloat(valNum);
//   //document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
//   // function that change the calue of farnhite to the celisus
// } 
// else
//  {//farnhite to kalven
//   //valNum = parseFloat(valNum);
//   document.getElementById("outputKelvin").innerHTML=((valNum-32)/1.8)+273.15;
// }
// input.value='';
// });

let celsius =
			document.getElementById('celsius');
		let fahrenheit =
			document.getElementById('fahrenheit');
		let kelvin =
			document.getElementById('kelvin');
		celsius.oninput = function () {
			let f = (parseFloat(celsius.value) * 9) / 5 + 32;
			fahrenheit.value = parseFloat(f.toFixed(2));

			let k = (parseFloat(celsius.value) + 273.15);
			kelvin.value = parseFloat(k.toFixed(2));
		}
		fahrenheit.oninput = function () {
			let c = ((parseFloat(
				fahrenheit.value) - 32) * 5) / 9;
			celsius.value = parseFloat(c.toFixed(2));

			let k = (parseFloat(
				fahrenheit.value) - 32) * 5 / 9 + 273.15;
			kelvin.value = parseFloat(k.toFixed(2));
		}
		kelvin.oninput = function () {
			let f = (parseFloat(
				kelvin.value) - 273.15) * 9 / 5 + 32;
			fahrenheit.value = parseFloat(f.toFixed(2));

			let c = (parseFloat(kelvin.value) - 273.15);
			celsius.value = parseFloat(c.toFixed(2));
		}