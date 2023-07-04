// Write your JavaScript code here!

const { addDestinationInfo, formSubmission, validateInput, pickPlanet  } = require("./scriptHelper");

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
   })
   
});