//Pwd Generator
function pwdgen(){
    let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    let pwdEl = document.getElementById("pwdEl")
        
        let randomIndex = Math.floor( Math.random() * characters.length)
        let randomIndex2 = Math.floor( Math.random() * characters.length)
        let randomIndex3 = Math.floor( Math.random() * characters.length)
        let randomIndex4 = Math.floor( Math.random() * characters.length)
        let randomIndex5 = Math.floor( Math.random() * characters.length)
        let randomIndex6 = Math.floor( Math.random() * characters.length)
        let randomIndex7 = Math.floor( Math.random() * characters.length)
        let randomIndex8 = Math.floor( Math.random() * characters.length)
        let randomIndex9 = Math.floor( Math.random() * characters.length)
        let randomIndex10 = Math.floor( Math.random() * characters.length)
        
        randomIndex = characters[randomIndex]
        randomIndex2 = characters[randomIndex2]
        randomIndex3 = characters[randomIndex3]
        randomIndex4 = characters[randomIndex4]
        randomIndex5 = characters[randomIndex5]
        randomIndex6 = characters[randomIndex6]
        randomIndex7 = characters[randomIndex7]
        randomIndex8 = characters[randomIndex8]
        randomIndex9 = characters[randomIndex9]
        randomIndex10 = characters[randomIndex10]
        
        pwdEl.textContent = randomIndex + randomIndex2 + randomIndex3 + randomIndex4 + randomIndex5 + randomIndex6 + randomIndex7 + randomIndex8 + randomIndex9 + randomIndex10
    }

