// Jericho Guiang
// Fetch data using Promise.all, allSettled, race, and any

const urls = [
    "https://pokeapi.co/api/v2/pokemon/pikachu",
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charmander"
  ];
  
  // Promise.all – all succeed or all fail
  Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(data => { 
      console.log(" Promise.all:"); 
      data.forEach(pokemon => console.log(" -", pokemon.name));
    })
    .catch(err => {
      console.log(" Promise.all failed:", err);
    });
  
  // Promise.allSettled – succeeds even if some fail
  Promise.allSettled(urls.map(url => fetch(url).then(res => res.json())))
    .then(results => {
      console.log("\n Promise.allSettled:");
      results.forEach((result, i) => {
        if (result.status === "fulfilled") {
          console.log(" - Success:", result.value.name);
        } else {
          console.log(" - Failed:", urls[i]);
        }
      });
    });
  
  // Promise.race – returns first to respond
  Promise.race(urls.map(url => fetch(url).then(res => res.json())))
    .then(data => {
      console.log("\n Promise.race:");
      console.log(" - First to respond:", data.name);
    })
    .catch(err => {
      console.log(" Race error:", err);
    });
  
  // Promise.any – returns first one that succeeds
  Promise.any(urls.map(url => fetch(url).then(res => res.json())))
    .then(data => {
      console.log("\n Promise.any:");
      console.log(" - First successful:", data.name);
    })
    .catch(err => {
      console.log(" All failed in .any:", err);
    });