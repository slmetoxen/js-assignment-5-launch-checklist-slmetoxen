// Write your helper functions here!
/*require('isomorphic-fetch');*/

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
    /* because input will return as a string I have to make it a number first */
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
    /* (Where are these parameters?) Get elements by ids here from the html statuscheck div and I'll need to use innerHTML to generate the text that will appear after submission and I need to use the event parameter and event.preventDefault() to stop the form submission if all input fields don't meet the requirements. */

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    /*let list = document.getElementById("faultyItems"); /*??? Does this go in script instead?*/
    
  
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert ("All fields are required.");

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert ("Please enter vaild information for all required fields.");
    } /* directions say if the user submits a fuel level that is too low (less than 10,000 liters) && or if the user submits a cargo mass that is too large (more than 10,000 kilograms), change faultyItems to visible (ex) element.style.aStyleProperty-??) with an updated fuel status stating that there is not enough fuel for the journey && or updated cargo status stating that there is too much mass for the shuttle to take off. launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.*/
      else {
        list.style.visibility = "visible";

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;
        
        if (fuelLevel < 10000 && cargoLevel > 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
        }

        else if (fuelLevel >= 10000 && cargoLevel > 10000){
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch.";  
        } 
        else if (fuelLevel < 10000 && cargoLevel <= 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";  
        } 
        else {
            fuelStatus.innerHTML = "Fuel level high enough for launch.";
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            launchStatus.style.color = "green";
            cargoStatus.innerHTML = "Cargo mass low enough for launch.";
        }
    }
}
/* MY UNDERSTANDING--- We should prevent the form submission from happening until all inputs have valid values. We can use the event parameter and event.preventDefault() to stop the form submission. In order to read the value of an input, check the value attribute. Assign a new value to input.value which will update the value shown in the input.
EXAMPLE:
window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let pilot = pilotNameInput.value;
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let copilot = copilotNameInput.value;
         let fuelInput = document.querySelector("input[name=fuelLevel]");
         let fuelLevel = fuelInput.value;
         let cargoInput = document.querySelector("input[name=cargoMass]");
         let cargoMass = cargoInput.value;
    (if statements would follow here)
          {
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
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
