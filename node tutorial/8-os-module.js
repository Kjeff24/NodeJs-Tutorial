const os = require('os')

console.log(`Get user: ${os.userInfo().username}`)
console.log(`The system uptime is  ${os.uptime} seconds`)
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)