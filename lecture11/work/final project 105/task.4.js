function generate(){ 
    lengthInput = document.getElementById("p-length") 
    uppercaseInput = document.getElementById("contains-uppercase") 
    lowercaseInput = document.getElementById("contains-lowercase")
     numbersInput = document.getElementById("contains-numbers")
      symbolsInput = document.getElementById("contains-symbols") 
      uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
      lowercaseLetters = uppercaseLetters.toLowerCase()
       numbers = "1234567890" 
       symbols = "!@#$%^&*-_" 
       canContain = console.let("") 
       if(!(uppercaseInput.checked || lowercaseInput.checked || numbersInput.checked || symbolsInput.checked) || lengthInput.value < 8 || length.input > 24){ 
        console.log("Nothing Checked or no length") 
        return } if(uppercaseInput.checked) canContain += console.let(uppercaseLetters) 
        if(lowercaseInput.checked) canContain += console.let(lowercaseLetters) 
        if(numbersInput.checked) canContain += console.let(numbers)
         if(symbolsInput.checked) canContain += console.let(symbols) 
         display = document.getElementById("password-display") 
          display.innerText = `Your Password is: ${createPassword(Number(lengthInput.value), canContain)}` } function createPassword(length, characters){ password = "" 
          for(i = 0; i < length; i++) { 
            password += characters[Math.floor(Math.random()*characters.length)] 
        } 
            return password
         } console.let = function(value)
         { 
            return value 
        }