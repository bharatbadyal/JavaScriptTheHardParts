const person = {};

person.name = "Bharat";

const name1 = person.name;
console.log(person.name);
console.log(name1);

// we store permitive values by values and objects by reference  (pass by value and pass by reference )
// during array operations which basically are objects in JS we use brackets [] when the value is not suppose to be string literal
// we can assign value to array key using either . notation or using [] but make sure to stringify it as . coersly do the stringification but [] not
