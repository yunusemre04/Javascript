//type change
let m;
m="new massage";
let mlen=(<string>m).length;
let mlen2= (m as string).length;
console.log(mlen);

//function
const getAverage = (...a:number[])=>{
    let total=0;
    let len=a.length;
    for(let i =0;i<len;i++){
        total+= a[i];
    }
    let result = total/len;
    return `Numbers average is ${result}`;
}

console.log(getAverage(62,45,85));