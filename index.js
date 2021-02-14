const newPersonObject = {
    age: 22,
    names: "asd",
    add: "fgh",
};
for (let prop in newPersonObject){
    console.log`${prop} : ${newPersonObject[prop]}`
}
const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
  };
const toarr =(obj)=>{
let arr = [];
arr = Object.values(obj);
return arr;

}
console.log(toarr(getObjectValues));

const objectToArray = {
    cats: 1,
    dogs: 2,
    turtles: 4,
  };
  const toarra = (obj)=>{
      return Object.entries(obj);
  };
  console.log(toarra(objectToArray));

  delete objectToArray.cats;
  console.log(objectToArray);

  console.log(objectToArray.hasOwnProperty("dogs"));

  const scrabble = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];
  const collect = (arr)=>{
      let result = 0;
      for (let i =0; i< arr.length; i++){
          result += arr[i]["score"];
      }
      return result;
  }
  console.log(collect(scrabble));
  
  const add = (num, obj)=>{
      return num >= obj.min && num<= obj.max;
  }
  console.log(add(4,{ min: 0, max: 5 }));

const free = (obj)=>{
    let toarr = Object.values(obj);
    let price = 50;
    let total = toarr.reduce((acc,curr)=> acc + curr, 0);
    return total == price; 
}
console.log(
    free({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 }));

    

    const countLettersAdc = (str) => {
        let arr =  str.toLowerCase().split("");
        let result = arr.reduce((acc, curr) => 
            {acc[curr] = acc[curr] ? acc[curr] +1: 1; return acc;},
            
             {});
             return result;
    }
    console.log(countLettersAdc("tree"));
      