// The string from which a character has to be searched

let data = "Enter the string";

// Enter the character that has to be searched from the above string

let srch = "i";

let c=0;

for (let i = 0; i<data.length; i++)
{
    if(srch == data[i])
    {
        console.log(`Required Character is found at position ${i+1} in the given string`);
        c+=1;
    }   
}

if ( c == 0)
{
    console.log("Required Character is not present in the given string");
}