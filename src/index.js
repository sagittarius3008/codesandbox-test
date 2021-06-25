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

// // テンプレート文字列
// const name = "toshi";
// const age = 32;
// // 従来の方法
// const message1 = "私の名前は" + name + "です" + "年齢は" + age + "です";
// console.log(message1);
// // テンプレート文字列囲むのはshift+@の``で囲む。バッククオート。
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// 従来の方法
// function func1(str) {
//   return str;
// }
// 上を書き換えると↓
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// // コードが一行の場合はretunと{}を省略して下記も可能
// // const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "toshi",
//   age: 32
// };
// // myProfileが毎回ウザイ！
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];
// const message3 = `名前は${myProfile[0]},年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// デフォルト値、引数など
// name=""を入れないでsayHello();呼び出すと、undefinedさんと表示される。
// 引数に値を入れておくことでデフォルト値として登録される
// const sayHello = (name="ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

// スプレッド構文 ...のもの
// １，配列の展開
// const arr1 = [1, 2];
// console.log(arr1); //[1,2]
// console.log(...arr1); //1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);//順番に処理する

//２，まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);//3,4,5を突っ込む

//３，配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

//コピーなら代入でよくね？
//破壊的変更になっちゃうので基本上のやり方
// const arr8 = arr4;
// arr8[0]=100;
// confirm.log(arr4);

// const arr7 = [...arr4,...arr5]
// console.log(arr7);

//map,filterを使った配列
// const nameArr = ["田中", "山田", "おり"];
// 従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }
// mapだと
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// ２つ目の引数には配列の番号が入ってくる.
// 使わなくてもよい
// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です`));

//filter:一致するものを返す（今回は奇数）
// const numArr =[1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num %2 ===1;
// })
// console.log(newNumArr);

// 自分の名前以外には"さん"をつけて配列を作る
// ここのmap内nameとかはその場限り。名称はなんでもおｋぽい。
// const newNameArr = nameArr.map((name)=>{
//   if (name ==="おり"){
//     return name
//   }else{
//       return `${name}さん`
//     }
// })
// console.log(newNameArr);

// 三項演算子・可読性には注意
// 条件?条件がtrueの時の動き：条件がfalseの時の動き
// const val1 =1 >0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num =1300;
// 3桁に区切る toLocale//
// console.log(num.toLocaleString());
// 文字列の場合はそのままになっちゃう
// typeof…変数の型を確認してくれる
// const formattedNum = typeof num === 'number' ? num.toLocaleString():'数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1,num2)=>{
//   return num1+num2 >100? '100を越えてます':'許容範囲内です';
// }
// console.log(checkSum(50,60));

// 論理演算子の本当の意味を知ろう
// const flag1 =true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log('1か2はtrueになります');
// }
// if(flag1 && flag2){
//   console.log('1か2はtrueになります');
// }

// ||は左側がfalseなら右側を返す。
// const num = null;//JSの場合nullはfalseとして判定
// const fee = num || "金額未設定です"; //金額未設定です、が返る。
// console.log(fee);//数字入れると数字がでてくる

// &&は左側がtrueなら右側を返す。
// const num2 =100;
// const fee2 =num2 && "何か設定されました";
// console.log(fee2);
