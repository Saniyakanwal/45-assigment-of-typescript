//continue from ex 42
let Magicians: string[]= ["Alto","David","John"];

function copyarray(Array:string[]){
    return [...Array]
}

function make_great(magicians:string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] =  magicians[i]  + ` The Great`; 
    }
}  

function show_magician(Magicians: string[]){
    Magicians.forEach(Magician=>{
        console.log(Magician);
    })
}

let copyMagicanArray = copyarray(Magicians)

make_great(Magicians);

console.log(`\n\nThis is My original Array`);
show_magician(Magicians);

console.log(`\n\nThis is my modified copy of the Array`);
show_magician(copyMagicanArray);


