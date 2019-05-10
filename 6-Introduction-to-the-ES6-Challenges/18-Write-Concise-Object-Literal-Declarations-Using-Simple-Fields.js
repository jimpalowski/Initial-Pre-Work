// Instead of having to repeat ourselves we defined an object and took in the name, age, and gender into our
// parameters therefor it has been setup.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  const Person = (name, age, gender) => ({
    name,
    age,
    gender
  });
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object