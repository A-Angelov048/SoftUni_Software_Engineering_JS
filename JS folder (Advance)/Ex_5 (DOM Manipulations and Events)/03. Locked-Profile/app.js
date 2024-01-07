function lockedProfile() {

    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(line => {line.addEventListener('click', onClick)});
    
    function onClick(event) {
        
        const checkBoxUnlock = event.target.parentElement.querySelector('[value=unlock]');
        const profile = event.target.parentElement.getElementsByTagName('div')[0];
        const buttonName = event.target;

        if (checkBoxUnlock.checked){
    
            if (buttonName.textContent === 'Show more'){
                profile.style.display = 'block';
                buttonName.textContent = 'Hide it'; 
            } else if (buttonName.textContent === 'Hide it'){
                profile.style.display = 'none';
                buttonName.textContent = 'Show more';
            }
        } 
    }
}