// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数は上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);
// val3="const変数を上書き不可"
// const val3 = "const変数を再宣言不可";

// objectの中ではconstでも変更可
// const val4 = {
//   name: "toshi",
//   age: 32
// };
// val4.name = "and";
// val4.address = "saitama";
// console.log(val4);

// 配列の場合も変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
const name = "toshi";
const age = 32;
// 従来の方法
const message1 = "私の名前は" + name + "です" + "年齢は" + age + "です";
console.log(message1);
// テンプレート文字列囲むのはshift+@の``で囲む。バッククオート。
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
