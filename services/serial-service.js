var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0',{
    baudRate: 9600,
    parser: SerialPort.parsers.Readline('\n')
});

module.exports = {
    start: ()=>{
        port.on('open',()=>{
            console.log('serial port open');
            port.on('data', (data)=>{
                console.log(data);
            })
        });
    }
}