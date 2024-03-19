function make_shirts (size:string ="Large", Message:String = "I Love Typescript"){
     console.log(`making a "${size}" t_shirt with the message "${Message}" printed on it`);
}

//for Large
make_shirts();

//for Medium
make_shirts("Medium");

//for Any size
make_shirts("Any size of","Coding Is Life");