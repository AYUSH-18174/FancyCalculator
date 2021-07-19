let screen = document.getElementById('in');

buttons = document.querySelectorAll('button');

let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        // e.target.color="yellow";
        buttonText = e.target.innerText;
        // console.log("Button is",buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if (buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value = eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}