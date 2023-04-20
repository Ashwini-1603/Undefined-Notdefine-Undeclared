console.log('Hello!');
// function Undefined() {
//   let name;
//   // const x;
//   var z;
//   console.log(' in case of var', z);
//   console.log(' in case of let', name);
//   console.log(
//     ' in case of const (Syntax Error):=> missing initializer in const declaration '
//   );
// }
// Undefined();

// function Undeclared() {
//   console.log(adam);
//   // RferenceError: adam is not defined
//   //   at Undeclared
// }
// Undeclared();

function NotDefine() {
  adam = '20';
  console.log(adam);
  // RferenceError: adam is not defined
  //   at not defined
}
NotDefine();
