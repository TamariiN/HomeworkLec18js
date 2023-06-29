console.log("tamara")

//* you have array of object where each object have year, sort it to descending

const person =[ 
    {
        name: "nika",
        surname:"kaxadze",
        dob: 1999
    },
    {
        name:"kaxa",
        surname: "nikadze",
        dob: 1998
    },
    {
        name: "luiza",
        surname: "laghidze",
        dob: 2003
    }
]

let years=person.map(item => item.dob).sort((a, b) => b - a)
console.log(years)

//  * you have users array and display it in html with innerHTML
const users =[ "nika" , "lika" , "tina" , "tekle ","giga"]

const container = document.getElementById('cont')
container.innerHTML = users.map(el => `<h2>${el}</h2>`).join("")

//* you have a laptops array and find the most expensive one and console it

let maxprice=0
const laptops =[ 
    {
        name: "apple",
        surname:"frst generation",
        price: 5899
    },
    {
        name:"acer",
        surname: "second generation",
        price: 3200
    },
    {
        name: "dell",
        surname: "laghidze",
        price: 3555
    }
]
//add new el in object

//with forEach
laptops.forEach(item =>{
    if(maxprice<item.price){
    maxprice=item.price
    }
})
console.log(maxprice)

// with map/sort

let max=laptops.map(item => item.price).sort((a,b) => b-a)
console.log(max[0])