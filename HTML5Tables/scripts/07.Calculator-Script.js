var keys = document.querySelectorAll('.keys span');
var operators = ['+', '-', '*', '/'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++){
    keys[i].onclick = function(e){
        var input = document.querySelector('.screen');
        var inputVal = input.innerHTML;
        var buttonVal = this.innerHTML;
        if(buttonVal == 'C'){
            input.innerHTML = '';
            decimalAdded = false;
        } else if(buttonVal == '='){
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                equation = equation.replace(/.$/, '');
            }

            if(equation) {
                input.innerHTML = eval(equation);
            }

            decimalAdded = false;
        } else if(operators.indexOf(buttonVal) > -1){
            var lastChar = inputVal[inputVal.length - 1];

            if(inputVal != '' && operators.indexOf(lastChar) == -1){
                input.innerHTML += buttonVal;
            } else if (inputVal == '' && buttonVal == '-'){
                input.innerHTML += buttonVal;
            }

            if(operators.indexOf(lastChar) > -1 && inputVal.length > 1){
                input.innerHTML = inputVal.replace(/.$/, buttonVal);
            }

            decimalAdded = false;
        } else if(buttonVal == '.'){
            if(!decimalAdded){
                input.innerHTML += buttonVal;
                decimalAdded = true;
            }
        } else{
            input.innerHTML += buttonVal;
        }

        e.preventDefault();
    }
}