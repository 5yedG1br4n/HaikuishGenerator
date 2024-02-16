// Haiku lines for different themes
const themes = {
  car: [
    "Engines hum softly",
    "Wheels spinning, journey unfolds",
    "Carry dreams on roads",
  ],
  travel: [
    "Wanderlust whispers",
    "Far horizons call to me",
    "Paths unknown unfold",
  ],
  programming: [
    "Code lines dance on screens",
    "Logic flowing through the wires",
    "Digital dreams soar",
  ],
  shopping: [
    "Bags sway with treasures",
    "Windows dressed in luxury",
    "Retail therapy",
  ],
  meditate: [
    "Silent mind, still heart",
    "Serenity in each breath",
    "Meditation's peace",
  ],
};

// Function to generate a haiku based on the selected theme
function generateHaiku(theme) {
  const haikuLines = themes[theme];
  if (!haikuLines) {
    console.error(`No haiku lines found for theme: ${theme}`);
    return;
  }

  const randomIndex1 = Math.floor(Math.random() * haikuLines.length);
  const randomIndex2 = Math.floor(Math.random() * haikuLines.length);
  const randomIndex3 = Math.floor(Math.random() * haikuLines.length);

  const haiku = `${haikuLines[randomIndex1]}<br>${haikuLines[randomIndex2]}<br>${haikuLines[randomIndex3]}`;

  document.getElementById("haikuOutput").innerHTML = haiku;
}

// Event listeners for theme buttons
document
  .getElementById("carButton")
  .addEventListener("click", () => generateHaiku("car"));
document
  .getElementById("travelButton")
  .addEventListener("click", () => generateHaiku("travel"));
document
  .getElementById("programmingButton")
  .addEventListener("click", () => generateHaiku("programming"));
document
  .getElementById("shoppingButton")
  .addEventListener("click", () => generateHaiku("shopping"));
document
  .getElementById("meditateButton")
  .addEventListener("click", () => generateHaiku("meditate"));
