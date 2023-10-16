/**
Допишіть код, щоб у консолі браузера з'явилися рядки, які написані у коментарях.
Використайте методи явного задання this
 */

var country = {
  name: "Ukraine",
  language: "ukrainian",
  capital: {
    name: "Kyiv",
    population: 2907817,
    area: 847.66,
  },
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
format.call(/* Ваш код */); // "<Ukraine>"
format.apply(/* Ваш код */); // "[Ukraine]"
format.call(/* Ваш код */); // ""Kyiv""
format.apply(/* Ваш код */); // "Kyiv"
