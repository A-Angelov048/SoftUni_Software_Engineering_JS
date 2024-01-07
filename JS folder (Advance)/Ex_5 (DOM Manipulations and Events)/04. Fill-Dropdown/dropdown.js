function addItem() {

    const menuOptions = document.getElementById('menu');

    const text = document.getElementById('newItemText').value;
    const nodeText = document.createTextNode(text);
    const value = document.getElementById('newItemValue').value;
    
    const createOption = document.createElement('option');
    createOption.setAttribute('value', value);
    createOption.appendChild(nodeText);

    menuOptions.appendChild(createOption);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}