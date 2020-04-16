let one = new Map();
let two = new Map();
let three = new Map();

// Первое - предполагаемый издатель , 2 - предполагаемые продукт
one.set("1", "aaa");
one.set("2", "fff");
one.set("3", "ccc");
// Цена
two.set(11, "1");
two.set(22, "2");
two.set(56, "3");
// Время
three.set(1, "1");
three.set(2, "2");
three.set(3, "3");
// _______________________________________
// Готовый definition
function mapFunc() {
    var price = []
    var time = []
    for(key of two.keys()){
        price.push(key)        
    }
    var maxPrice = (Math.max(...price))
    var minPrice = (Math.min(...price))
    for(key of three.keys()){
        time.push(key)        
    }
    var maxTime = (Math.max(...time))
    var minTime = (Math.min(...time))

    console.log('Min price', one.get(two.get(minPrice)), minPrice, two.get(minPrice),
                getKeyByValue(map3, two.get(minPrice)))
    console.log('Max price', one.get(twp.get(maxPrice)), maxPrice, two.get(maxPrice),
                getKeyByValue(three, two.get(maxPrice)))
    console.log("Min time", one.get(three.get(minTime)),
                getKeyByValue(two, three.get(minTime)), three.get(minTime), minTime)
    console.log("Max time", map1.get(three.get(maxTime)),
                getKeyByValue(two, three.get(maxTime)), three.get(maxTime), maxTime)
}
mapFunc()





function getKeyByValue(ob, str){
    for(key of ob.keys()){
        if(ob.get(key) === str)
            return key
    }
}


