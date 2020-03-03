var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Cant het numbers to work
var num = '0123456789';
var sym = '!@#$%^&*';

var amount = document.getElementById("amount");
var passw = document.getElementById("passw");
var submit = document.getElementById("submit");
var syb= document.getElementById("syb");
var num= document.getElementById("num");

submit.addEventListener("click", function(e) {
    var characters = letters;
    (num.checked) ? characters += num : '';
    (syb.checked) ? characters += sym : '';
    passw.value = password(amount.value, characters);
});

function password(l,characters){
    var pwd = '';
for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
}
return pwd;
}

    
