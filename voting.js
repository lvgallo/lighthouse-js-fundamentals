const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

/*it must have a capacity of at least 20, and be a school or community centre.*/

function chooseStations(stations){
  const goodStations = []; 
  for (const station of stations){ //each [index] is individual
    const capacity = station[1]; //look a particular info
    if (capacity >= 20){ //make a decision
      const type = station[2]; //look a particular info
      if (type === "school" || type === "community centre") { /*make a 
 					decision*/
        goodStations.push(station[0]); /*I need print an array with all names 
 					that I selected - PUSH TO STATEMENT (it needs an array... 
 					so I created goodStation empty array in the begin). 
 					Everytime I found a good station, instead print it as console.log, 
 					the station will be add to good station*/
      }
    } 
  }
  return goodStations;/* I need to get the value out from the function, so I use return	*/
}
console.log(chooseStations(stations));
