const problem = document.createElement(`div`);
document.body.appendChild(problem);

let ans = false;
let A = NaN;

const btns = [
`one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `zero`,
`plus`, `minus`, `times`, `divide`, `PLeft`, `PRight`, `dot`, `mod`, `sqrt`, `pi`,
`e`, `ANS`, `Ex`, `degrees`, `percentage`, `sin`, `cos`, `tan`, `log`, `comma`, `ln`
]

for(let i of btns){
    eval(`
    const ${i} = document.getElementById("${i}");
    ${i}.onclick = () => {
        if(!ans){
            problem.innerText += ${i}.textContent;
        } else{
            problem.innerText = ${i}.textContent;
            ans = false;
        }
    };
    `);
}

function calculate(){
    if((!problem.innerText) || problem.innerText.includes(`//`)) return;

    try{
        const π = Math.PI;
        const e = Math.E;

        const log = (number, base=10) => {return Math.log(number) / Math.log(base)}
        const ln = (number) => {return log(number, e)}

        problem.innerText = String(eval(problem.innerText
        .replaceAll(`%`, `/(100)`)
        .replaceAll(`mod`, `%`)
        .replaceAll(`sqrt`, `Math.sqrt`)
        .replaceAll(`^`, `**`)
        .replaceAll(`°`, `*(${π/180})`)
        .replaceAll(`sin`, `Math.sin`)
        .replaceAll(`cos`, `Math.cos`)
        .replaceAll(`tan`, `Math.tan`)
        ))

        .replaceAll(`NaN`, `Not a Number`)
        .replaceAll(`Infinity`, `#=TOO BIG TO COUNT!!`);

        A = problem.innerText
    } catch{
        problem.innerText = `#=ERR!!`;
    } finally{
        ans = true;
    }
}