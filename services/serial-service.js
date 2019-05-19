var SerialPort = require('serialport');
var models = require('../models');
var port = new SerialPort('/dev/ttyACM0',{
    baudRate: 9600,
    parser: SerialPort.parsers.Readline('\n')
});

module.exports = {
    open: (pos)=>{
        port.on('open',()=>{
            console.log('serial port open');
            port.on('data', (data)=>{

                //데이터셋 파싱
                var datasets = data.toString();
                console.log(datasets);
                var arr = datasets.split(' ').map((e)=>{
                    e *= 1;
                });

                models.center.create({ 
                    created: new Date().getTime(),
                    pos: pos,
                    field_1: arr[0],
                    field_2: arr[1],
                    field_3: arr[2],
                    field_4: arr[3],
                    field_5: arr[4],
                    field_6: arr[5],
                    field_7: arr[6],
                    field_8: arr[7],
                    field_9: arr[8],
                    field_10: arr[9],
                    field_11: arr[10],
                    field_12: arr[11],
                    field_13: arr[12],
                    field_14: arr[13],
                    field_15: arr[14],
                    field_16: arr[15],
                    field_17: arr[16],
                    field_18: arr[17],
                    field_19: arr[18],
                    field_20: arr[19],
                    field_21: arr[20],
                    field_22: arr[21],
                    field_23: arr[22],
                    field_24: arr[23],
                    field_25: arr[24],
                    field_26: arr[25],
                    field_27: arr[26],
                    field_28: arr[27],
                    field_29: arr[28],
                    field_30: arr[29],
                    field_31: arr[30]
                });
                
            })
        });
    },

    close: ()=>{
        port.close((err)=>{
            console.log('serial port closed');
        });
    }
}