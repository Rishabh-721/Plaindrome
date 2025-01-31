const inputElement = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const msg = document.getElementById("result"); 


const plaindrom = () => {
    const inputValue = inputElement.value.trim();
    const cleaninput = cleanStr(inputValue);
    const inputarr = cleaninput.split("");
    const reversearr = inputarr.reverse();
    const reverseinp = reversearr.join("");
    if(inputValue == ""){
       alert("Please input a value");
    } else if(cleaninput !== reverseinp){
        msg.innerText = `${inputValue} is not a palindrome`
    }else {
        msg.innerText = `${inputValue} is a palindrome`
    }
}

checkBtn.addEventListener("click", plaindrom);

const cleanStr = (str) => {
    const clstr = str.replace(/[^a-zA-Z0-9]/g, "");
    return clstr.toLowerCase();
}