// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   /* Here is the HTML formatting for our mission target div.
   */
   let div = document.getElementById("missionTarget");
   div.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
}
/* MY COMMENTS FROM DIRECTIONS---validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" ...use validateInput() to complete the formSubmission() function */
function validateInput(testInput) {
    let input = Number(testInput);
    if (input === '') {
        return "Empty";
    }
    if (isNaN(input) === true) {
        return "Not a Number";
    }
    if (isNaN(input) === false) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    /* where are these parameters? should i get elements by ids here? 
    const pilotName = document.getElementById("pilotName");


    if (validateInput(pilot) === "Empty" || */
   
}
/* MY UNDERSTANDING--- We should prevent the form submission from happening until all inputs have valid values. We can use the event parameter and event.preventDefault() to stop the form submission
EXAMPLE:
window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         if (pilotNameInput.value === "" || copilotNameInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
         }
      });
   }); */
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json" ).then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random()*planets.length);    
    return planets[randomIndex]
}

/*module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
