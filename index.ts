

import { Sim800c } from "./Sim800cTS/Sim800c";

/*
*** Example 

*** WARNING
*** USE ONLY "tsx watch index.ts" in package.json
*/

const sim: Sim800c = new Sim800c('/dev/ttyUSB0', 9600);

await sim.openPortSim800c();

const response: string = await sim.command('AT');

console.log(response)

await sim.closePortSim800c()