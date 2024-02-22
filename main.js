import {parose} from "./fuggveny.js";
console.log(`vart eredmeny:false , kapott: ${parose(5)}, ${parose(5)===true ? "jó":"nemjó"}`);
console.log(parose(5));
console.log(`Kapott: ${parose(5)}`);
console.log(` vart eredmeny:false , kapott: ${parose(0)}, ${parose(0)===false ? "jó":"nemjó"}`);
console.log(parose(0));

console.log(parose(4));
console.log(` vart eredmeny:true , kapott: ${parose(4)}, ${parose(4)===true ? "jó":"nemjó"}`);
console.log(parose(2.1));
console.log(` vart eredmeny:false , kapott: ${parose(2.1)}, ${parose(2.1)===false ? "jó":"nemjó"}`);

console.log(parose(-4));
console.log(` vart eredmeny true , kapott: ${parose(-4)}, ${parose(-4)===true ? "jó":"nemjó"}`);

console.log(parose("vmi"));

console.log(` vart eredmeny:false , kapott: ${parose("vmi")}, ${parose("vmi")===false ? "jó":"nemjó"}`);