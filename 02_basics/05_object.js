//Destructuring is a convenient way of extracting multiple values from data stored in objects and Arrays. It can be used in variable declaration and assignment.
//object Destructuring

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
  price : 999,
  couseInstructor : "Heaven Chakma"
}

// course.couseInstructor = "Heaven Chakma"

const {couseInstructor : instructor} = course //object destructuring
console.log(instructor)
// console.log(couseInstructor);


