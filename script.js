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
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotNameInput.value;

        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotNameInput.value;

        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelInput.value;

        let cargoInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoInput.value;

        /*alert("All fields are required!");*/
        event.preventDefault();
      });
});