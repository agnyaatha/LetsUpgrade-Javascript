// Enter the elements of an array

let data = [ "adios", "jungle", "amigo", "jute", "jerusalem", "congo", "adamatium", "aaaa"];

//let data = ["impressive", "congo", "corrode"];

let n=0;

for( let i = 0; i < data.length; i++)
{
    let temp = data[i];
    for(let j=0; j<temp.length; j++ )
    {
        if(temp[j] == 'a')
        {
            console.log(temp);
            n+=1;
        }
        break;
    }
}

if(n==0)
{
    console.log("The character \'a\' is not present in any of the elements in the given array");
}