const socket = io();

const input = document.getElementById('input');
const messageList = document.getElementById('messages');

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && input.value.trim() !== '') {
        socket.emit('chat-message', input.value);
        input.value = '';
    }
});

socket.on('chat-message', (message) => {
    const item = document.createElement('li');
    item.textContent = message;
    messageList.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
