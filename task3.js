/**
Прив'яжіть функцію format() до об'єкта user.
Реалізуйте 2 версії поточного завдання за допомогою:
1. Анонімну функцію обгортку;
2. Метод bind().
 */

var user = {
  name: "Tom",
};
function format(beginMsg, endMsg) {
  console.log(beginMsg + this.name + endMsg);
}
var tomFormat = // Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
