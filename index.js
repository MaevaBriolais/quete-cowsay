const information = require('./information');
console.log(`Hi ${information.firstName} and welcome to the campus ${information.campus}`);


const  cowsay  =  require ( "cowsay" ) ;
console . log ( cowsay . say ( { 
    text : `${information.firstName} ${information.campus}`, 
    e : "oO" , 
    T : "U " 
} ) ) ;