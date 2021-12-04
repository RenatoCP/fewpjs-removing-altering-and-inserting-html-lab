// Write your code here!
document.querySelector('main').remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')

let text = document.createTextNode('Renato is the champion')

newHeader.appendChild(text)

