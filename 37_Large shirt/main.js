//For Large
function make_shirts(size, Message) {
    if (size === void 0) { size = "Large"; }
    if (Message === void 0) { Message = "I Love Typescript"; }
    console.log("making a \"".concat(size, "\" t_shirt with the message \"").concat(Message, "\" printed on it"));
}
//for Large
make_shirts();
//for Medium
make_shirts("Medium");
//for Any size
make_shirts("Any size of", "Coding Is Life");
