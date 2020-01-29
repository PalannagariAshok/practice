const city:{name:string,population:number}={
    name:"hyderabad",
    population:1000000
}
let  cities = (value:string | number)=>{
    if(typeof(value)==="string"){
        city.name=value
        console.log(city)
    }
    else if(typeof(value)==="number"){
        city.population=value
        console.log(city)
    }
    else{
        console.log("error")
    }
}
cities(23)