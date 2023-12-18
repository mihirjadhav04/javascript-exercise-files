// const tinderUser = new Object() - one way to declare the object.[SINGLETON OBJECT]
const tinderUser = {} // [NON-SINGLETON OBJECT]

tinderUser.id = "143"
tinderUser.name = "Mihir"
tinderUser.isLoggedIn = false



// console.log(tinderUser)

const regularUser = {
    email : "mihir@gmail.com",
    fullname : {
        userfullname: {
            firstname: "mihir",
            lastname: "jadhav"
        }
    }
}


//combining objects

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// {} - this gives more confirmation about the combine of the object.
// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}

//scenario : when you get values from db.Here you get the value as the array of objects.

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
]


// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) //extract all the keys of the object and store it in the form of array.
// console.log(Object.entries(tinderUser)) //extract all the [key , value] and store it in the array format of individual arrays.



// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// ******************* De-Structuring of Objects ***********************



const course = {
    courseName: "Stock Market",
    price: "999",
    duration: "2 Months",
    courseInstructor: "Mihir Jadhav"
}

// 1 Method to access the value to destructure
console.log(course.courseInstructor);


//2 Method to access the value and destructure
const {courseInstructor: instructor} = course
console.log(instructor)

