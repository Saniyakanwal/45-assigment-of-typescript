function makesandwich (item: string[]){
    console.log(`\nMaking your sandwish with:`);

    item.forEach(Element => console.log("-" + Element));

    console.log(`Enjoy your sandwich!`);
}

makesandwich(["Cheese","peanut butter","club"]);

makesandwich(["Grilled cheese","Turkey"]);

makesandwich(["bacon","Chicken"]);
