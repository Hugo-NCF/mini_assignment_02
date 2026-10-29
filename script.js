
 // script.js: interactive features for the Big Four Anime website.

// ===== Data =====

// create an array of anime character objects
const characters = [
    { name: "Goku", series: "Dragon Ball", image: "images/Goku.webp" },
    { name: "Vegeta", series: "Dragon Ball", image: "images/Vegeta.webp" },
    { name: "Naruto", series: "Naruto", image: "images/Naruto.webp" },
    { name: "Sasuke", series: "Naruto", image: "images/Sasuke.webp" },
    { name: "Luffy", series: "One Piece", image: "images/Luffy.png" },
    { name: "Zoro", series: "One Piece", image: "images/Zoro.webp" },
    { name: "Ichigo", series: "Bleach", image: "images/Ichigo.webp" },
    { name: "Rukia", series: "Bleach", image: "images/Rukia.webp" }
  ];
  // End of the characters array.
  
  // create an object to remember the current filters
  const state = {
    searchText: "",
    selectedSeries: "All"
  };
  // End of the state object.
  
  // ===== Select elements =====
  
  // select the dark mode button
  const themeButton = document.querySelector("#theme-toggle");
  
  // select the character search input
  const filterInput = document.querySelector("#character-search");
  
  // select the character list container
  const characterList = document.querySelector("#character-list");
  
  // select the paragraph showing the result count
  const characterCount = document.querySelector("#character-count");
  
  // select the Naruto form
  const characterForm = document.querySelector("#character-form");
  
  // select the favorite character input
  const favoriteCharacter = document.querySelector("#favoriteCharacter");
  
  // select the paragraph showing form feedback
  const formSummary = document.querySelector("#form-summary");
  
  // select the series filter
  const seriesFilter = document.querySelector("#series-filter");
  
  // ===== Requirement 1: dark mode =====
  
  // add a click listener to the theme button
  themeButton.addEventListener("click", function() {
    // switch between light and dark mode
    document.body.classList.toggle("dark-mode");
  
    // check if dark mode is currently active
    const isDarkMode = document.body.classList.contains("dark-mode");
  
    // change the button text based on the current mode
    if (isDarkMode) {
      themeButton.textContent = "Light Mode";
    } else {
      themeButton.textContent = "Dark Mode";
    }
  });
  // End of dark mode listener.
  
  // ===== Requirement 2: filterable list =====
  
  // define render, which displays matching characters
  function render() {
    // clear the previous character cards
    characterList.innerHTML = "";
  
    // filter characters using the current search and series
    const filteredCharacters = characters.filter(function(character) {
      // check whether the character name matches the search
      const matchesSearch = character.name.toLowerCase().includes(state.searchText.toLowerCase());
  
      // check whether the character belongs to the selected series
      const matchesSeries = state.selectedSeries === "All" || character.series === state.selectedSeries;
  
      // keep characters that match both filters
      return matchesSearch && matchesSeries;
    });
  
    // create one card for every matching character
    filteredCharacters.forEach(function(character) {
      // create a div for the character card
      const card = document.createElement("div");
  
      // give the card a CSS class
      card.className = "market-card";

      // create an image for the character
      const image = document.createElement("img");

      // set the image source and alt text
      image.src = character.image;
      image.alt = character.name;

      // add the image to the card
      card.appendChild(image);
  
      // create a heading for the character name
      const name = document.createElement("h3");
  
      // set the heading text
      name.textContent = character.name;
  
      // create a paragraph for the anime series
      const series = document.createElement("p");
  
      // set the series text
      series.textContent = character.series;
  
      // add the heading to the card
      card.appendChild(name);
  
      // add the series to the card
      card.appendChild(series);
  
      // add the completed card to the page
      characterList.appendChild(card);
    });
  
    // update the number of matching characters
    characterCount.textContent = "Showing " + filteredCharacters.length + " of " + characters.length + " characters.";
  }
  // End of render function.
  
  // display all characters when the page first loads
  render();
  
  // add an input listener to the search box
  filterInput.addEventListener("input", function() {
    // save the current search text
    state.searchText = filterInput.value;
  
    // update the displayed characters
    render();
  });
  // End of search listener.
  
  // ===== Requirement 3: form validation =====
  
  // add a submit listener to the Naruto form
  characterForm.addEventListener("submit", function(event) {
    // prevent the page from reloading
    event.preventDefault();
  
    // read the favorite character input
    const characterName = favoriteCharacter.value.trim();
  
    // check whether the input is empty
    if (characterName.length === 0) {
      // display an error message
      formSummary.textContent = "Please enter a character name.";
  
      // stop the form handler
      return;
    }
  
    // show a summary when the input is valid
    formSummary.textContent = "Your favorite Naruto character is " + characterName + "!";
  
    // clear the input after submitting
    favoriteCharacter.value = "";
  });
  // End of form listener.
  
  // ===== Requirement 4: additional feature =====
  
  // add a change listener to the series filter
  seriesFilter.addEventListener("change", function() {
    // save the selected anime series
    state.selectedSeries = seriesFilter.value;
  
    // update the displayed characters
    render();
  });
  // End of series filter listener.
  