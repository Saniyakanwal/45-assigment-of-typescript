function storeCarInfo(manufacturer: string, ModelName: string,...Option: [string, any][]):Object {
    
    let CarInfo = { manufacturer,ModelName};
    Option.forEach(([key,value]) => CarInfo[key] = value);
      return CarInfo;
}

console.log(storeCarInfo("Toyota","Corolla", ["colour","Black"], ["Year","2020"]));

console.log(storeCarInfo("Ford","Fiesta", ["Colour","Blue"], ["Sunroof","True"]));