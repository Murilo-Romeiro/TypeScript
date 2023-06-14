function printName(
    obj: {name:string, age:number})
    {
        console.log(`This erson is called ${obj.name} and he's ${obj.age} years old.`)
    }

    let person1 = {name: 'Pedro', age: 24}
    printName(person1)
    
// let person2 = {name: 'Joao'}
// printName(person2)
    