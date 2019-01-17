
const ws = new WebSocket('ws://localhost:8887/')

ws.onopen = () =>
{
    console.log ('Conectado');
};

ws.onmessage = e =>
{
    const msg = JSON.parse (e.data);
    console.log (msg);
};

ws.onerror = e =>
{
    console.log (e);
};

ws.onclose = e =>
{
    console.log ('Conexión cerrada');
    console.log (e);
};

const latitud = document.getElementById ('latitud');
const longitud = document.getElementById ('longitud');
const btnSend = document.getElementById ('send');

btnSend.addEventListener ('click', function() {
    const msg = {
        latitud: (latitud.value),
        longitud: (longitud.value)
    };
    ws.send(JSON.stringify(msg));
});

