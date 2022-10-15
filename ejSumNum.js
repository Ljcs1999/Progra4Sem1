let nums = [3,1,2,10,1];
let numsResultado=[];

numsResultado[0]=nums[0];
for(let cont=1;cont<nums.length;cont++)
{
    //console.log("Posicion "+cont+":"+nums[cont]);
    let valoracumulado = numsResultado[cont-1];
    numsResultado[cont]=valoracumulado + nums[cont];
}
console.log("Input: "+nums);
console.log(`Output: ${numsResultado}`);
console.log('Hola');