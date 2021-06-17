const listItem = document.createElement('li');
const listItem2 = document.createElement('li');
const nameTitle = document.createElement('h2');
const myImage = document.createElement('img');
const ul = document.querySelector('ul')

ul.appendChild(listItem)
ul.appendChild(listItem2);
listItem.appendChild(nameTitle);
listItem2.appendChild(myImage);
nameTitle.innerHTML = 'Haider Alboloushi';
nameTitle.style.color = '#4287f5'
myImage.src = './hab.png';
myImage.alt = 'my image';

document.getElementsByClassName('list').appendChild(listItem)