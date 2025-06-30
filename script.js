function add(a,b){
  return a+b ;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a * b ;
}
function div(a , b){
    return a /b ;
}
 
function setdisplay(){
    let buttons = document.querySelectorAll(".button");
    for(let button of buttons){
        button.addEventListener( "click" , (Event)=>{
            document.querySelector('.display').textContent +=button.textContent;
        })
    }
}

function operate(){
    setdisplay();

    let num1 ;
    let num2 ;
    let operator ;
    let result ;

    let addbutt = document.querySelector('#addbutton');
    let subbutt = document.querySelector('#subbutton');
    let mulbutt = document.querySelector('#mulbutton');
    let divbutt = document.querySelector('#divbutton');
    let clearbutt = document.querySelector('#clearbutton');
    let eqlbutt = document.querySelector('#eqlbutton');
    let display = document.querySelector('.display');

    
    addbutt.addEventListener("click" ,(Event) => {
        num1 = display.textContent.substring(0 ,display.textContent.indexOf('+') );
        operator = '+';
    });
    subbutt.addEventListener("click" ,(Event) => {
        num1 = display.textContent.substring(0 ,display.textContent.indexOf('-') );
        operator = '-';
    });
    mulbutt.addEventListener("click", (Event) => {
        num1 = display.textContent.substring(0 ,display.textContent.indexOf('*') );
        operator = '*';
    });
    divbutt.addEventListener("click" ,(Event) => {
        num1 = display.textContent.substring(0 ,display.textContent.indexOf('/') );
        operator = '/';
    });
    clearbutt.addEventListener("click", (Event) => {
        display.textContent = " ";
    });
    eqlbutt.addEventListener("click", (Event) => {
        num2= display.textContent.substring( display.textContent.indexOf(operator)+1,display.textContent.length -1);
        display.textContent=" ";
        if(operator==="+"){
            result = add(parseInt(num1) ,parseInt(num2))
        }
        if(operator==="-"){
            result = sub(parseInt(num1) ,parseInt(num2))
        }
        if(operator==="*"){
            result = mul(parseInt(num1) ,parseInt(num2))
        }
        if(operator==="/"){
            if(num2 !==0){
                result = div(parseInt(num1) ,parseInt(num2));
            }
            else{
                result ="infinite ";
            }  
        }
        display.textContent = result;

    });
}
operate();