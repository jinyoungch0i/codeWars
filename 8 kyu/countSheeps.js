// countSheeps.js

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

countSheeps = (arr) => {
    let counter = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            counter++; //this is how to increment counter*! [counter++] (line A)
        }
    }
    return counter;
}


/*
initially struggled with this problem
because i had forgotten how to increment in a for loop, see (line A).
*/
