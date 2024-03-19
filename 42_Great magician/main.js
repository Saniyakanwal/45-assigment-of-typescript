//continue from ex 41
var Magicians = ["Alto", "David", "John"];
function show_magician(Magicians) {
    Magicians.forEach(function (Magician) {
        console.log(Magician);
    });
}
show_magician(Magicians);
//ex 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "The Great";
    }
}
make_great(Magicians);
show_magician(Magicians);
