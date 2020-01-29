const city = {
    name: "hyderabad",
    population: 1000000
};
let cities = (value) => {
    if (typeof (value) === "string") {
        city.name = value;
        console.log(city);
    }
    else if (typeof (value) === "number") {
        city.population = value;
        console.log(city);
    }
    else {
        console.log("error");
    }
};
cities(23);
