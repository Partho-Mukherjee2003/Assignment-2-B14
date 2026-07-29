function topRatedRestaurant(restaurants){
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }
  else{
    let bestRating = restaurants[0];
    for (let restaurant of restaurants) {
      if (restaurant.rating > bestRating.rating) {
        bestRating = restaurant ;
      }
    }
    return bestRating.name.toUpperCase();
  }
}

let result3 = topRatedRestaurant([
  { name: "Chillox", rating: 4.5 },
  { name: "Sultan's Dine", rating: 4.8 },
]);
console.log(result3);

let result4 = topRatedRestaurant([
  { name: "KFC", rating: 4.2 },
  { name: "Pizza Hut", rating: 4.6 },
]);
console.log(result4);

let result1 = topRatedRestaurant([]);
console.log(result1);

let result2 = topRatedRestaurant("Not an array");
console.log(result2);
