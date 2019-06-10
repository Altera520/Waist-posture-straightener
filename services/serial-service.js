var SerialPort = require('serialport');
var models = require('../models');
var port = new SerialPort('/dev/ttyACM0',{
    baudRate: 9600,
    parser: new SerialPort.parsers.Readline('\n')
});

module.exports = {
    open: ()=>{
	    console.log('call')
        port.on('open',()=>{
            console.log('serial port open');
		console.log(serialOn)
            port.on('data', (data)=>{
	    if(serialOn){
                //데이터셋 파싱
                var datasets = data.toString();
                console.log(datasets);
                var arr = datasets.split(' ').map((e)=>{
			return parseInt(e);});

		    var query ='insert into center (field_1, field_2, field_3, field_4, field_5, field_6, field_7, field_8, field_9, field_10,field_11,field_12,field_13, field_14, field_15, field_16, field_17, field_18, field_19, field_20, field_21, field_22, field_23, field_24, field_25, field_26,field_27,field_28,field_29,field_30,field_31, created, position,name) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),'+position+','+'\''+name+'\''+')'

models.sequelize.query(query,{replacements: arr,type: models.Sequelize.QueryTypes.INSERT}).then((res)=>{console.log(res)})
                /*models.center.create({ 
                    //created: new Date(),
                    position: position,
		    name: name,
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
                });*/
              }
            })
        });
    },

    close: ()=>{
        port.close((err)=>{
            console.log('serial port closed');
        });
    }
}
