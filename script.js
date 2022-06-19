const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);



// a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.style.color='red';
paragraph.textContent = "Hey I'm Red!";
container.appendChild(paragraph);


// an <h3> with blue text that says “I’m a blue h3!”
const headerThree = document.createElement('h3');
headerThree.style.color='blue';
headerThree.textContent= "I'm a blue h3";
container.appendChild(headerThree);

// a <div> with a black border and pink background color with the following elements inside of it:
// 1. another <h1> that says “I’m in a div”
// 2. a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const secondContent = document.createElement('div')
const headerOne = document.createElement('h1');
const para = document.createElement('p');

headerOne.textContent = "I'm in a div";
para.textContent = "ME TOO!";

secondContent.style.border='black 1px solid';

secondContent.style.backgroundColor='pink';

secondContent.appendChild(headerOne);
secondContent.appendChild(para);

container.appendChild(secondContent);