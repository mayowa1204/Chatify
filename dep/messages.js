const moment = require ('moment');

function formatMessage(username, text){
    return{
        username,
        text,
        time: moment().format('h:mm a')
    }
}
// Man.prototype.getBirthYear =function(){
//     return this.dob.getFullYear();
// }
module.exports = formatMessage;