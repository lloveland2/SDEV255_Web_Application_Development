window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   
   fahrenheitInput = document.querySelector("#fInput");
   fahrenheitInput.addEventListener("input", clearCelsius);
   
   celsiusInput = document.querySelector("#cInput");
   celsiusInput.addEventListener("input", clearFarenheit);
   
   errorMessage = document.querySelector("#errorMessage");

   convertButton = document.querySelector("#convertButton");
   convertButton.addEventListener("click",conversionCheck);

   weatherImage = document.querySelector("#weatherImage");
  
}

function clearFarenheit() { // Clears the fahrenheit field if the user types in the celsius field.
   fahrenheitInput.value = "";
}

function clearCelsius() { // Clears the celsius field if the user types in the fahrenheit field.
   celsiusInput.value = "";
}

function conversionCheck() { // Checks the fahrenheit and celsius fields for a valid value to convert.
   
   // Fahrenheit is checked first.

   degreesFahrenheit = parseFloat(fahrenheitInput.value);
   if (isNaN(degreesFahrenheit)) { // Confirm if the value is not a number.
      if (fahrenheitInput.value != "") { // Ensure the field is not empty.
         errorMessage.innerHTML = (fahrenheitInput.value + " is not a number");
         return;
      }
   }
   
   else { // If validation passes, perform the conversion process and clear any previous errors.
      console.log("Temperature: " + degreesFahrenheit + "F");
      fahrenheitInput.value = "";
      celsiusInput.value = convertFtoC(degreesFahrenheit);
      updateWeatherImage(degreesFahrenheit);
      errorMessage.innerHTML = ("");
      return;
   }
   
   // If the fahrenheit field is empty, then we check celsius.
   
   
   degreesCelsius = parseFloat(celsiusInput.value);
   if (isNaN(degreesCelsius)) { // Confirm if the value is not a number.
      if (celsiusInput.value != "") { // Ensure the field is not empty.
         errorMessage.innerHTML = (celsiusInput.value + " is not a number");
         return;
      }
      else { // If this is triggered, both fields are empty. 
         errorMessage.innerHTML = ("Enter a number first!");
      }
   }
   
   else { // If validation passes, perform convert celsius to fahrenheit and update the page elements.
      console.log("Temperature: " + degreesCelsius + "C");
      celsiusInput.value = "";
      convertedTemperature = convertCtoF(degreesCelsius);
      fahrenheitInput.value = convertedTemperature;
      updateWeatherImage(convertedTemperature);
      errorMessage.innerHTML = ("");
      return;
   }
   
}

function convertCtoF(temperature) { // Converts celsius to fahrenheit.
   return temperature * 9/5 + 32;
}

function convertFtoC(temperature) { // Converts fahrenheit to celsius.
   return ( temperature - 32 ) * 5/9;
}

function updateWeatherImage(temperature) { // Updates the weather image to match the temperature entered.
   console.log("Temperature: " + temperature);
   if ( temperature < 32 ) {
      weatherImage.src = "cold.png";
   }
   else if (temperature <= 50) {
      weatherImage.src = "cool.png";
   }
   else {
      weatherImage.src = "warm.png";
   }
}
