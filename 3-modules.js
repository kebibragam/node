//CommonJS , every file is module(by default)
//Modules -Encapsulatedd Code (only share minimum)
const names= require('./4-names');
const sayHI = require('./5-utils');
const data = require('./6-alternative');
require('./7-mind-grenade');

console.log(data);
sayHI('bibek');
sayHI(names.john);
sayHI(names.peter);
sayHI(data.singlePerson.name);

