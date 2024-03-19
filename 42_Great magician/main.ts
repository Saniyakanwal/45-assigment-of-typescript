//continue from ex 41
let Magicians: string[]= ["Alto","David","John"];
function show_magician(Magicians: string[]){
    Magicians.forEach(Magician=>{
        console.log(Magician);
    })
}

show_magician(Magicians);

//ex 42
function make_great(magicians:string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] +"The Great";
    }
}  

make_great(Magicians);
show_magician(Magicians);