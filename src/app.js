/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const excuseGenerator = () => {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let what = ["my homework", "my phone", "the car"];
    let action = ["ate", "peed", "crushed", "broke"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    //for (let i = 0; i < 1; i++) {
    //randomExcuse.push(what[Math.floor(Math.random() * what.length)]);
    //randomExcuse.push(action[Math.floor(Math.random() * action.length)]);
    //randomExcuse.push(what[randomWhat]);
    // }

    let randomExcuse =
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
    return randomExcuse;
  };

  console.log(excuseGenerator());
  document.getElementById("excuse").innerHTML = excuseGenerator();
};
