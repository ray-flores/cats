const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackToRunWhenDone) { //added callback function
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callbackToRunWhenDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};
//CHANGE 1: moved the console.log to a new function:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed)
};

//CHANGE 2: we're now passing two args into breedDetailsFromFile: breed string and callback function
breedDetailsFromFile('Bombay', printOutCatBreed); //added callback function

// we try to get the return value
// see CHANGE 2: const bombay = breedDetailsFromFile('Bombay');
//see CHANGE 1: console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!