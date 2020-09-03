// Program to print an array in reverse order
// Enter the elements of an array

let data = [ "adios", "jungle", "amigo", "jute", "jerusalem", "congo", "adamatium", "aaaa"];

console.log("The given list of elements of an array in reverse order is as given below")

for(let i=data.length-1; i>=0; i--)
{
    console.log(data[i]);
}