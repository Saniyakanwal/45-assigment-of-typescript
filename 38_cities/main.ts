function describe_cities (city: string, country: String = "pakistan"){
    console.log(`${city} is in ${country}`);
}

//for karachi
describe_cities("Karachi");

//for lahore
describe_cities("Lahore");

//for india
describe_cities("Bombay","India");