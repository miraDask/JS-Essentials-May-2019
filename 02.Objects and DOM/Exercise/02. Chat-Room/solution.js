function solve() {
    let buttonElement = document.querySelector('button#send');

    buttonElement.addEventListener('click', () => {
        let inputElement = document.getElementById('chat_input');
        let message = inputElement.value;
        let messageElement = document.createElement('div');
        messageElement.className = 'message my-message';
        messageElement.textContent = message;
        let chatElement = document.getElementById('chat_messages');
        chatElement.appendChild(messageElement);
        inputElement.value = '';
    })
}


