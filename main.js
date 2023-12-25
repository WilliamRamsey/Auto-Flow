function addArgument(id) {
    let speech = document.getElementById(id);

    let htmlString = '<div class="aff-argument"><p contenteditable="true">title</p><hr><p contenteditable="true">author</p></div>'
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlString;

    let newElements = tempDiv.firstChild.childNodes;
    
    let targetElement = document.getElementById(id);
    newElements.forEach(function(element) {
        console.log(element)
        targetElement.appendChild(element);
    });
}
