//Error function
function displayError(message = "Unknown error!") {
  return `<div class="error">${message}</div>`;
}
//API call
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function apiCall() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const facts = data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      const objectTags = facts[i].tags;

      const numberOfTags = objectTags.length;

      if (i === 8) {
        break;
      }
      resultsContainer.innerHTML += `<ul class="list-style">
            <li><span class="bold-text">Name:</span> ${facts[i].name}</li>
            <li><span class="bold-text">Rating:</span> ${facts[i].rating}</li>
            <li><span class="bold-text">Tags:</span> ${numberOfTags}</li>
    </ul>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = displayError(
      "An error occurred during the API call!"
    );
  }
}

apiCall();
