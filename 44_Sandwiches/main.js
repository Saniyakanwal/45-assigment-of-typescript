function makesandwich(item) {
    console.log("\nMaking your sandwish with:");
    item.forEach(function (Element) { return console.log("-" + Element); });
    console.log("Enjoy your sandwich!");
}
makesandwich(["Cheese", "peanut butter", "club"]);
makesandwich(["Grilled cheese", "Turkey"]);
makesandwich(["bacon", "Chicken"]);
