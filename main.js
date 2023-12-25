function addArgument(id) {
    let speech = document.getElementById(id);

    let containerDiv = document.createElement('div');
    containerDiv.classList.add('aff-argument')

    let upperParagraph = document.createElement('p');
    let textNodeUpper = document.createTextNode('title');
    upperParagraph.appendChild(textNodeUpper);
    
    let lineBreak = document.createElement('hr');

    let lowerParagraph = document.createElement('p');
    let textNodeLower = document.createTextNode('author');
    lowerParagraph.appendChild(textNodeLower);

    containerDiv.appendChild(upperParagraph);
    containerDiv.appendChild(lineBreak);
    containerDiv.appendChild(lowerParagraph);

    speech.appendChild(containerDiv);
}
