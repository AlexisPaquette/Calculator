var num = '';
var numbers = [];
var operations = [];
var input_order = '';


function equal() {
    numbers.push(num);
    num = '';

    var all_ops = false;
    var new_num = [];
    var new_ops = [];
    let ans;

    while (all_ops == false) {
            console.log('in while')
            console.log(operations)

        switch (operations[0]) {
            case 'x':
                console.log('case x');
                ans = Number(numbers[0]) * Number(numbers[1]);
                numbers[1] = ans;
                numbers.splice(0, 1);
                operations.splice(0, 1);
                break;

            case '/':
                console.log('case /');
                ans = Number(numbers[0]) / Number(numbers[1]);
                numbers[1] = ans;
                numbers.splice(0, 1);
                operations.splice(0, 1);
                break;

            case '+':
                console.log('case +');
                new_num.push(numbers[0])
                new_ops.push(operations[0]);
                
                operations.splice(0, 1);
                numbers.splice(0, 1);
                break;

            case '-':
                console.log('case -');
                new_num.push(numbers[0]);
                new_ops.push(operations[0]);
                
                operations.splice(0, 1);
                numbers.splice(0, 1);
                break;
        }

        if (operations.length == 0) {
            new_num.push(numbers[0]);
            all_ops = true;
        }
        console.log(operations)
        console.log(numbers)
        console.log(new_num)
        console.log(new_ops)
    }

    ans = Number(new_num[0]);
    
    for (let j = 0; j < new_ops.length; j++) {
        switch (new_ops[j]) {
            case '+':
                ans = ans + Number(new_num[j+1]);
                break;
    
            case '-':
                ans = ans - Number(new_num[j+1]);
                break;
        }   
    }
document.getElementsByClassName("answer")[0].innerHTML = ans.toString();
console.log('ans:', ans)
numbers = [];
operations = [];
input_order = "";
}

function nbr_input(number){
    console.log('initial value', num);
    console.log('initial value', number);
    console.log((number == "0"));

    if  (!(num.length > 12 || (number == "0" && num.length == 0))) { 
        num = num.concat(number.toString());
        input_order = input_order.concat(number.toString());
    } 
    console.log('final value', num);
    document.getElementsByClassName("answer")[0].innerHTML = input_order;  
}

function op_input(op){
    if (!['x', '+', '-', '/'].includes(input_order.slice(-1))) {
        operations.push(op);
        input_order = input_order.concat(op);
        numbers.push(num);
        num = '';
    }
    console.log([op, operations, input_order]);
    document.getElementsByClassName("answer")[0].innerHTML = input_order;  
}

function decimal_input(){
    console.log('initial value', num);
    if (num == '') {
        num = '0';
        input_order = input_order.concat('0');
    }

    if (!num.includes('.')) {
        num = num.concat('.');
        input_order = input_order.concat('.');
    }
    console.log('final value', num);
    document.getElementsByClassName("answer")[0].innerHTML = input_order;       
}

function reset(){
    ans = 0;
    num = '';
    numbers = [];
    operations = [];
    input_order = '';
    document.getElementsByClassName("answer")[0].innerHTML = ans.toString();
}

function back(){
    if (input_order.length == 0) {
        return;
    }
    
    if (['x', '+', '-', '/'].includes(input_order.slice(-1))) {
        operations = operations.slice(0, -1);
        input_order = input_order.slice(0, -1);
        num = numbers.slice(-1)[0];
        numbers = numbers.slice(0, -1);

    } else {
        num = num.slice(0, -1)
        input_order = input_order.slice(0, -1); 
            }

    document.getElementsByClassName("answer")[0].innerHTML = input_order;  
}