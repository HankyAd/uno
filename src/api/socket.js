import io from 'socket.io-client';

export const socket = io.connect('https://hankyad-uno-backend.herokuapp.com');

socket.reconnectionAttempts = 3;
