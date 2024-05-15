// stack memory use in (permitive) => copy mein change hota, heap memory used in (non permit) => origional value mein change hota

// stack
// let myYoutube = "shazii"  // ye ha origional to is ma change nai hoga

// let anothername = myYoutube
//  anothername = "shizashazi" // ye ha copy to is ma change hoga
// console.log(myYoutube)
// console.log(anothername)


let yourName = "shazi"
let herName = yourName

herName = "shiza"
console.log(yourName)
console.log(herName)


let myId = {
    email: "thisis@gamilcom",
    bankName:  "UBL"
}

let AnotherId = myId

AnotherId.email= "whatis@gmail.com"


console.log(AnotherId.email)
console.log(myId.email)





// let userOne = {
//     email: "shazi@gmail.com",
//     refNo: "sdhs@ngj"
// }

// let userTwo = userOne
// userTwo.email = "shiza@gmail.com"

// console.log(userOne.email)
// console.log(userTwo.email)
