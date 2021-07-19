// 1

function getTerminationte (num, dec) {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}

document.getElementById("form").onsubmit = function () {
  let count = +document.getElementById("input").value;
  document.getElementById("users").innerHTML = count + " " + getTerminationte(count, ["Джамшут", "Джамшута", "Джамшутов"]);
  return false
}

// 2   

const obj ={
    name: "Enriki",
    age: 30,
    profession: "programmer",
    Sity: "London with wife Sara",
    "likes jogging in the morning and fresh juice": true,
    }
    obj.children = [{
        name: "Any", age: 4 ,
    }];
    obj.mother = [
        { 
            sity: "Liverpool with new husband Nikolay with Siberia",
            "They met last year, in a cafe, when my mother celebrated her 65th birthday": true,
        }
    ]

console.log (obj);

const obj1 = {
    name: "Sara",
    age: 26,
    profession: "lawyer",
   " likes to watch TV shows, and sometimes writes quite good articles in a local newspaper": true,
};
obj1.children = [{
    name: "Any", age: 4 ,
}];

   obj1.parents = [
       {
        name: "Jim", age:60,
        name: " Kelly", age: 60,
        sity: "Manchester",
        "love to travel around their native England":true,
        "pensioners" : true,
       }
   ];
console.log (obj1);

const obj2 ={
    name: "Any",
    age: 4,
    "ikes to draw with crayons and play with the neighbor's boy in the sandbox": true,
    
}
console.log (obj2);

const obj3 = {
    name: "Nicolay",
    age:70,
    "perfectly copes with the duties of the head of security in a huge business center, and after work he plays first violin in the Liverpool Orchestra": true,
    }
    console.log (obj3);
