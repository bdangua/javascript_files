// if - else
let time = 28;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time > 17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Please enter a Proper Time');
}

// Switch statement
let today = new Date().getDay();
let fullDay = '';
switch(today){
    case 0:
        fullDay = 'Sunday';
        break;
    case 1:
        fullDay = 'Monday';
        break;
    case 2:
        fullDay = 'Tuesday';
        break;
    case 3:
        fullDay = 'Wednesday';
        break;
    case 4:
        fullDay = 'Thursday';
        break;
    case 5:
        fullDay = 'Friday';
        break;
    case 6:
        fullDay = 'Saturday';
        break;
    default:
        fullDay = '';
        break;
}
console.log(`Today is : ${fullDay}`);

// Print From 0 to 10
let output = '';
for(let i =0; i<= 10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print 20 to 0 diff 2
output = '';
for(let i = 20; i >= 0 ; i-=2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// Print stars using For Loop
output = '';
let theNumber = 5;
for(let i = 1 ; i<= theNumber; i++){
    for(let j = 1; j<= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// Print Numbers
output = '';
theNumber = 9;
for(let i = 1; i<=theNumber; i++){
    for(let j = 1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// Print Reverse Numbers
output = '';
theNumber = 9;
for(let  i = theNumber; i>=1; i--){
    for(let j = 1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// Print triangle Numbers
output = '';
theNumber = 9;
for(let i=1; i<=theNumber; i++){
    for(let j = 1; j<=i ; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// Print Reverse triangle Numbers
output = '';
theNumber = 9;
for(let i = theNumber; i>=0; i--){
    for(let j = 1; j<=i ; j++){
        output += j;
    }
    output += '\n';
}
console.log(output);

// While Loop
console.log('------------------------ While Loop ------------');

// Print From 0 to 10 using while loop
output = '';
let i =0;
while(i<= 10){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// Print 20 to 0 diff 2 Using While
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i}`;
    }
    i-=2;
}
console.log(output);

// Print stars using While Loop
output = '';
theNumber = 5;
i = 1;
while(i<= theNumber){
    let j = 1;
    while(j<= i){
        output += '#';
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Numbers Using While Loop
output = '';
theNumber = 9;
i = 1;
while(i<=theNumber){
    let j = 1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Reverse Numbers Using While Loop
output = '';
theNumber = 9;
i = theNumber;
while(i>=1){
    let j = 1;
    while(j<=i){
        output += i;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Print triangle Numbers Using While Loop
output = '';
theNumber = 9;
i=1;
while(i<=theNumber){
    let j = 1;
    while(j<=i){
        output += j;
        j++;
    }
    output += '\n';
    i++;
}
console.log(output);

// Print Reverse triangle Numbers Using While Loop
output = '';
theNumber = 9;
i = theNumber;
while(i>=0){
    let j = 1;
    while(j<=i){
        output += j;
        j++;
    }
    output += '\n';
    i--;
}
console.log(output);

// Do While
console.log(' --------------- DoWhile ---------------- ');