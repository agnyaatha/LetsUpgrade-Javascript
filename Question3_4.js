let object1 = [
    { 
    name : "Rick Sanchez" ,
    age : 84,
    country : "Planet C132",
    hobbies : ["Teleporting","Adventure", "Experimenting", "Wubba Lubba Dubb Dubb"]
    },
    {
    name : "Spiderman" ,
    age : 24,
    country : "New York",
    hobbies : ["Drawing","Basketball", "Roaming", "Dating with Gwen"]
    },
    {
    name : "Chota Bheem" ,
    age : 44,
    country : "India",
    hobbies : ["Eating Laddoo","Beating Khalia", "Playing with Jaggu", "Fighting evil"]
    }
]
// console.log(object1);

console.log("Printing all the elements of an array of objects")

function PrintAll() {
    for( let i=0; i<object1.length; i++) {
        console.log(object1[i].name);
        console.log(object1[i].age);
        console.log(object1[i].country);
        object1[i].hobbies.forEach(function(a) {
            console.log(a);
        });
    }
}

PrintAll();

console.log("Object having age less than 30")

function LesserAge() {
    for( let i=0; i<object1.length; i++) {
        if(object1[i].age < 30)
        {
            console.log(object1[i].age)
            console.log(object1[i]);
        }
    }
}

LesserAge();

console.log("Objects having the element country as India")

function CountryIndia() {
    for( let i=0; i<object1.length; i++) {
        if(object1[i].country == "India")
        {
            console.log(object1[i].country)
            console.log(object1[i]);
        }
    }
}

CountryIndia();
