// Definera array av namn
let people = [
  "Lisa",
  "Jonas",
  "Camilla",
  "Evert",
  "Sofia",
  "Rufus",
  "Maja"
];


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultDisplay = document.getElementById("resultDisplay");


  
  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click",() => {
    
    const name = searchInput.value;
    let found = false; 

    for (let person of people) {
      if (name === person) {
        resultDisplay.innerHTML = `Namn hittades: ${person}`;
        found = true;
        return;
      } else {
        resultDisplay.innerHTML = "Namn hittades inte.";
        found = false;
      }
    }

    // 1. Hämta texten i searchInput.value
    
    // 2. Skapa en boolean för found
    
    // 3. Loopa igenom people-arrayen

    // 4. Jämför texten med varje namn i arrayen

    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true

    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.

    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});