//What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

for (var i = 400; i < 4500; i++) {

  if (i % 1 ===0 && i % 2 ===0 && i % 3 ===0 && i % 4 ===0 && i % 5 ===0 && i % 6 === 0 && i % 7 ===0 && i % 8 ===0 && i % 9 ===0){
    console.log("smallest number!", i);
  } //else {
    //console.log("nope", i);
  //}
}
