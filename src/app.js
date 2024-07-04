

window.onload = function() {
  //write your code here

  const excuseGenerator = () => {
    const who = ["The dog", "My grandma", "The mailman", "My bird"];
    const what = ["my homework", "my phone", "the car"];
    const action = ["ate", "peed", "crushed", "broke"];
    const when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

    const randomWho = randomElement(who);
    const randomWhat = randomElement(what);
    const randomAction = randomElement(action);
    const randomWhen = randomElement(when);
  
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  
  };

  console.log(excuseGenerator());
  document.getElementById("excuse").innerHTML = excuseGenerator();
};
