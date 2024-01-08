//this index file will hold code for actually invoking the svg render process
//after the initial code is all done

//setting const to utilize fs promises api.
//this will support writing/reading of files and easier validation of data
const { readFile, writeFile} = require('fs/promises');


//brainstorm notes.
//we need to give user prompt for desired shape,
// validate that prompt result,
// then pass it into some sort of functionality that will determine the making of a triangle, circle, or square class.