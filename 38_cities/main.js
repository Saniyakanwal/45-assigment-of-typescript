function describe_cities(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
//for karachi
describe_cities("Karachi");
//for lahore
describe_cities("Lahore");
//for india
describe_cities("Bombay", "India");
