const userInfo = require("./information");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "nom" + userInfo.firstname + " le campus " + userInfo.campus,
    e: "xX",
    T: "u",
  })
);
