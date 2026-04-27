const terminal = document.querySelector('.terminal-area');
const terminalLine = document.querySelector('.added-data');
const terminalHead = document.querySelector('.terminal-head');
const terminalInput = document.querySelector('.terminal-input');
const validCommands = ['contact', 'about', 'clear', 'help', 'exit'];

terminal.addEventListener('click', () => {
    terminalInput.focus();
});

terminalHead.addEventListener('click', () => {
    terminalInput.stoppropagation();
});

terminalInput.addEventListener('keydown', (e) => {
    const command = terminalInput.value.trim().toLowerCase();
    if (e.key === 'Enter' && command !== '' && validCommands.includes(command)) {
        terminalLine.innerHTML += `<div style="color: green;">>>>${command}</div>`;
        if (command === 'clear') {
            terminalLine.innerHTML = '';
        }
        else if (command === 'exit') {
            window.close();
        } else if (command === 'help') {
            const newLocal = terminalLine.innerHTML += `
            <div style="color: green;">
                Commands: 
                        1) about
                        2) clear
                        3) exit
                        4) help
                        5) contact
            </div>`;
        } else if (command === 'about') {
            terminalLine.innerHTML += `AksaLabs foundation is a company made for providing you with the bet freelancing services related to Technological sector at a very affordable price.`
        } 
        terminalInput.value = '';
    } else if (e.key === 'Enter' && !validCommands.includes(command)) {
        terminalLine.innerHTML += `<div style="color: red;">>>>${command}</div>`;
        terminalLine.innerHTML += `<div style="color: red;">>>Command not found: ${command}</div>`
        terminalInput.value = '';
    }
});