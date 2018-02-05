var button = document.getElementById('addElem');
var list = document.getElementById('list');
button.addEventListener('click', function () {
    var element = document.createElement('li');
    element.innerText = 'item ' + list.getElementsByTagName('li').length;
    list.appendChild(element);
});
