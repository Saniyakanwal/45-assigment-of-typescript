function storeCarInfo(manufacturer, ModelName) {
    var Option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Option[_i - 2] = arguments[_i];
    }
    var CarInfo = { manufacturer: manufacturer, ModelName: ModelName };
    Option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return CarInfo[key] = value;
    });
    return CarInfo;
}
console.log(storeCarInfo("Toyota", "Corolla", ["colour", "Black"], ["Year", "2020"]));
console.log(storeCarInfo("Ford", "Fiesta", ["Colour", "Blue"], ["Sunroof", "True"]));
