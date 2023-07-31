var os = require('os'); // Get information about the computer's operating system:
console.log("Platform: " + os.platform());  // displays win32;
console.log("Architecture: " + os.arch()); // displays x64 
console.log("Type: " + os.type()); // displays Windows_NT
console.log("UPTime: " + os.uptime());  // the time the laptop has been on 
console.log( os.constants); // returning an object of OS constant values  
console.log("Cpus: " + os.cpus()); // [object,object] as an array
console.log("User: " + os.userInfo()); // [object,object] as an array same as cpus