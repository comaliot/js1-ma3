
/*
1.  Convert the function below to an arrow function

function(a, b) {
    return a - b;
}
*/

(a, b) => {
    return a - b;
}

/*
2. Make a call to the URL below,
pass the JSON it returns to a function
and inside that function loop through the results
and log each game's name.
*/

const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
    .then(function(namesData) {
        return namesData.json();
    })
    .then(function(json) {
        const results = json.results;
         for (let i = 0; i < results.length; i++) {
            console.dir(results);
         }
      })
    .catch(function(error) {
        document.location.href = "error.html";
    });

/*
3. Replace the word cats with the word giraffes in the following sentence
*/

let myString = "These cats are outrageous."

console.log(myString.replace("cats", "giraffes"));

/*
4.Given the URL below, write code that checks if there is
a userId parameter in the query string.

If there is no userID parameter,
redirect the browser to third.html.

If there is a userID parameter and its value is less than 10,
redirect to first.html.

If there is a userID parameter and its value is 10 or greater,
redirect to second.html.
*/

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

if (params.has('userId')) {
    document.location.href = "third.html";
}

const userId = parseInt(params.get('userId'));

if (userId < 10) {
    document.location.href = "first.html";
}

if(userId >= 10) {
    document.location.href = "second.html";
}


/*
5. Write code that removes the button,
and only the button, from its parent element in the HTML below
*/

const container = document.querySelector(".container");

container.removeChild(button);

/*
6. Create an li element with a text value
of Parrots and a class of parrots.

Add the new item as the second item in the ul below
(add it after Cows).
*/

// Parent element
const animalsList = document.querySelector(".animals");

// New list item
let newListItem = document.createElement("li");
newListItem.setAttribute("class", "parrots");
newListItem.textContent = "Parrots";
const cows = document.querySelector('.cows');
cows.after(newListItem);

/*
7. Make a call to the URL below and pass the JSON
it returns to a function.

Inside that function select the div from the HTML below
and assign the rating property from the JSON object
as it's text value.

In the catch method, log the error that may be returned.
*/


