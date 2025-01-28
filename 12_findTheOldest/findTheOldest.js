const findTheOldest = function(arr) {
    const currentyear = new Date().getFullYear()
    let orderbyage = arr.sort((per1,per2) => {
        if (!per1.yearOfDeath){
            per1.yearOfDeath = currentyear
        } else if (!per2.yearOfDeath) {
            per2.yearOfDeath = currentyear
        }

        let per1age = per1.yearOfDeath - per1.yearOfBirth
        let per2age = per2.yearOfDeath - per2.yearOfBirth
        return per1age - per2age
    })
    let oldestinarray = orderbyage.pop();
    return oldestinarray
};



const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]



  console.log(findTheOldest(people))
  console.log(people)



// Do not edit below this line
module.exports = findTheOldest;
