let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//execute and check .pop() 
console.log(`Before .pop(): ${secretMessage.length}`);
secretMessage.pop();
console.log(`After .pop(): ${secretMessage.length}`);

//add 'to' and 'Program' to array
console.log(`Before .push(): ${secretMessage.length}`);
secretMessage.push('to', 'Program');
console.log(`After .push(): ${secretMessage.length}`);

//replace 'easily' with 'right'
console.log(`Before replacement: ${secretMessage[7]}`);
secretMessage[7] = 'right';
console.log(`After replacement: ${secretMessage[7]}`);

//remove first index of the string
console.log(`Before removal: ${secretMessage[0]}`);
secretMessage.shift();
console.log(`After removal: ${secretMessage[0]}`);

//add Programming to the beginning of the array
console.log(`Before addition: ${secretMessage[0]}`);
secretMessage.unshift('Programming');
console.log(`After addition: ${secretMessage[0]}`);

//replace 'get', 'right', 'the', 'first', and 'time' with 'know
 console.log(`Before splice: ${secretMessage[6]}`);
 secretMessage.splice(6, 5, 'know,');
 console.log(`After splice: ${secretMessage[6]}`);

 console.log(secretMessage.join(' '));
 