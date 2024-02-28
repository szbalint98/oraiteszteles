import {parose} from "./fuggveny.js";
console.log(`Vizsgált szám:5 Várt eredmény:false , kapott: ${parose(5)}, ${parose(5)===true ? "jó":"nemjó"}`);
console.log(`Vizsgált szám:0 Várt eredmény:true , kapott: ${parose(0)}, ${parose(0)===true ? "jó":"nemjó"}`)
console.log(`Vizsgált szám:4 Várt eredmény:true , kapott: ${parose(4)}, ${parose(4)===true ? "jó":"nemjó"}`);
console.log(`Vizsgált szám:2.1 Várt eredmény:false , kapott: ${parose(2.1)}, ${parose(2.1)===false ? "jó":"nemjó"}`);
console.log(`Vizsgált szám:-4 Várt eredmény:true , kapott: ${parose(-4)}, ${parose(-4)===true ? "jó":"nemjó"}`);
console.log(`Vizsgált szám:"vmi" Várt eredmény:false , kapott: ${parose("vmi")}, ${parose("vmi")===false ? "jó":"nemjó"}`);