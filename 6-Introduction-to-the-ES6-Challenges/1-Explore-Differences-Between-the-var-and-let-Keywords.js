// We wont be using var anymore so we replaced how we define variables with let.

let catName;
let quote;
function catTalk() {
  "use strict";

   catName = "Oliver";
   quote = catName + " says Meow!";

}
catTalk();