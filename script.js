// Write your JavaScript code here!

const { addDestinationInfo, formSubmission, validateInput, pickPlanet, myFetch  } = require("./scriptHelper");
/* ??? validateInput & formSubmission are not being read can I use document.querySelectorAll*/
window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetSelected = pickPlanet(listedPlanets);
       addDestinationInfo(document,planetSelected.name,planetSelected.diameter,planetSelected.star, planetSelected.distance, planetSelected.moons, planetSelected.image);
   });
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");

/* Use the event parameter and event.preventDefault() to stop the form submission if all input fields don't meet the requirements.*/
    form.addEventListener("submit", function(event) {
      /*if the below input fields don't meet the requirements stop submission with event.preventDefault()*/  
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotNameInput.value;

        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotNameInput.value;

        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelInput.value;

        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoInput.value;

        event.preventDefault();
        /*else call formSubmission*/
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) 
      });
      
});