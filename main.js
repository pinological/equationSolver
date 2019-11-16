let x, x1, x2;
let y, y1, y2;
let z, z1, z2;
let xx, yy, zz;

alert("Enter coff of 1 eqation after another");
x = parseFloat(prompt("Enter coff of X of eqation 1"));
y = parseFloat(prompt("Enter coff of Y of eqation 1"));
z = parseFloat(prompt("Enter coff of z of eqation 1"));

x1 = parseFloat(prompt("Enter coff of X of eqation 2"));
y1 = parseFloat(prompt("Enter coff of Y of eqation 2"));
z1 = parseFloat(prompt("Enter coff of z of eqation 2"));

x2 = parseFloat(prompt("Enter coff of X of eqation 3"));
y2 = parseFloat(prompt("Enter coff of Y of eqation 3"));
z2 = parseFloat(prompt("Enter coff of z of eqation 3"));

xx = parseFloat(prompt("Enter last number of eqation 1"));
yy = parseFloat(prompt("Enter last number of eqation 2"));
zz = parseFloat(prompt("Enter last number of eqation 3"));
//for understanding propouse
// x   y     z    xx
// x1  y1    z1   yy
// x2  y2    z2   zz

console.log(" x = " + x + " y = " + y + " z = " + z);
console.log(" x1 = " + x1 + " y1 = " + y1 + " z1 = " + z1);
console.log(" x2 = " + x2 + " y2 = " + y2 + " z2 = " + z2);
console.log(" xx = " + xx + " yy = " + yy + " zz = " + zz);

let d, d1, d2, d3;
d = ((x * (y1 * z2 - z1 * y2)) - (y * (x1 * z2 - z1 * x2)) + (z * (x1 * y2 - x2 * y1)));

console.log(d);

d1 = ((xx * (y1 * z2 - z1 * y2)) - (y * (yy * z2 - z1 * zz)) + (z * (yy * y2 - y1 * zz)));

console.log(d1);

d2 = ((x * (yy * z2 - z1 * zz)) - (xx * (x1 * z2 - z1 * x2)) + (z * (x1 * zz - yy * x2)));

console.log(d2);

d3 = ((x * (y1 * zz - yy * y2)) - (y * (x1 * zz - yy * x2)) + (xx * (y2 * x1 - y1 * x2)));

console.log(d3);

let tx, ty, tz;
tx = d1 / d; //x value
ty = d2 / d; //y value
tz = d3 / d; //z value

document.getElementById("xvalue").innerHTML = ("Value of X = " + tx);
document.getElementById("yvalue").innerHTML = ("Value of Y = " + ty);
document.getElementById("zvalue").innerHTML = ("Value of Z = " + tz);