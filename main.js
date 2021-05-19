const removeBackground = (element) => {

    for (var i= body.attributes.length; i-->0;)
        element.removeAttributeNode(element.attributes[i]);
}
removeBackground(document.body);

const changeBackground = () => {

    if(document.body.hasAttribute('background')){

        document.body.removeAttribute('background');
        document.body.classList.add('animated-bg');
    }
    else{

        document.body.setAttribute('background', '');
    }
    console.log(document.body.className);
}



window.onload = () => {
    document.getElementById('bg-toggle').addEventListener('click', changeBackground(), removeBackground());
}