let output = "";

let display = document.querySelector(".display");

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            try{
                display.value = eval(output);
            }
            catch(error){
                display.value = "Error";
            }
        }
        else if(e.target.innerHTML == "C"){
            output = "";
            display.value = output;
        }
        else if(e.target.innerHTML == "DEL"){
            output = output.slice(0, -1);
            display.value = output;
        }
        else{
            console.log(e.target);
            output = output + e.target.innerHTML;
            display.value = output;
        }
    });
});