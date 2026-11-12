/* ============================================================
   DG8002 - Activity 8: TAG-Me Interactive Edition
   Author: Olubunmi Balogun
   Adds a theme toggle, a random fact generator and a
   personalised greeting to the Totally Accurate Guide website.
   ============================================================ */


/* ---------- 1. LIGHT / DARK MODE TOGGLE ---------- */
/* Adds or removes the .dark-mode class on the <body> element.
   Because classList.toggle flips the class each time, the visitor
   can switch back and forth as many times as they like. */

const themeButton = document.getElementById("theme-button");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeButton.textContent = "Switch to light mode";
    } else {
      themeButton.textContent = "Switch to dark mode";
    }
  });
}


/* ---------- 2. RANDOM FACT GENERATOR ---------- */
/* An array of facts. A random index is chosen each time the
   button is clicked, and the paragraph text is replaced.
   The page is never reloaded. */

const facts = [
  "She wrote her first line of Python in September 2026. It did not run.",
  "She has built a marketing department from nothing three separate times.",
  "Two years of hosting a podcast have made her permanently aware of the word 'um'.",
  "She holds an MBA and two marketing fellowships, and was once defeated by a single missing quotation mark.",
  "She will spend forty minutes working out why a figure is off by one cent, long after everyone else has stopped caring.",
  "She is immune to the psychological damage of an unanswered email."
];

const factButton = document.getElementById("fact-button");
const factDisplay = document.getElementById("fact-display");

if (factButton && factDisplay) {
  factButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
  });
}


/* ---------- 3. PERSONALISED GREETING ---------- */
/* Reads the visitor's name from the text input, checks that it is
   not empty, and writes a greeting into the page. */

const nameInput = document.querySelector("#name-input");
const greetButton = document.querySelector("#greet-button");
const greetingOutput = document.querySelector("#greeting-output");

if (nameInput && greetButton && greetingOutput) {
  greetButton.addEventListener("click", function () {
    const visitorName = nameInput.value.trim();

    if (visitorName === "") {
      greetingOutput.textContent = "You have to type a name first. That is the whole mechanism.";
      greetingOutput.classList.add("error-text");
    } else {
      greetingOutput.textContent =
        "Welcome, " + visitorName + ". Your clearance has been granted. Try not to abuse it.";
      greetingOutput.classList.remove("error-text");
      nameInput.value = "";
    }
  });
}
