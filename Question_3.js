// The array from which a string has to be searched

let data = ["apple", "ball", "cat", "dog", "elephant", "dog"];

// Enter the string that has to be searched from the above array

let srch = "dog";

let n=0;

for (let i = 0; i<data.length; i++)
{
    if(srch.length == data[i].length)
    {
        let temp = data[i];
        let c = 0;
        for( let j = 0; j<srch.length; j++)
        {
            if (srch[j] == temp[j]) { c+=1;}
        }
        if(c == srch.length)
        {
            console.log(`The given string is found at position ${i+1} in the given array`);
            n+=1;
        }
    }   
}

if(n == 0)
{
    console.log("Entered string is not found in the given array");
}
