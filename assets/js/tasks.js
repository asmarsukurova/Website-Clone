var person = {
  name: "Asmar",
  age: "13",
};

var names = [
  {
    name: "Rahide",
    age: 22,
  },
  {
    name: "Asmar",
    age: 13,
  },
  {
    name: "Aqsin",
    age: 13,
  },
  {
    name: "Roya",
    age: 37,
  },
];
console.log(names);

// var guvenilir = true;
// var kitaboxuyan = false;
// var pozitiv = true;

// if (guvenilir === true && kitaboxuyan === true) {
//   console.log("menim dostum ola biler");
// } else if ((guvenilir === true && kitaboxuyan === true) || pozitiv === true) {
//   console.log("qismen dostum ola biler");
// } else {
//   console.log("menim dostum ola bilmez");
// }

// var haaland = true;
// var messi = false;
// var mBappe = false;
// var debruine = false;
// if (haaland === true && debruine === true) {
//   console.log("bunlar mancertes oyuncularidir");
// } else if (haaland === true || mBappe === false || debruine === true) {
//   console.log("mene qarisiq lazimdir");
// } else {
//   console.log("bunlar mancester oyunculari deyl");
// }

var computer = true;
var ram = 8;
var year = 2011;
var color = "black";

if (computer === true && ram > 6 && year > 2012) {
  console.log("computeri almaq olar");
} else if (computer === false && ram > 6 && year < 2012) {
  console.log("almaq kafidir");
}else if (computer ===true || color==="black" || ram<12){
  console.log("qara reng menim ucun uygundur");  
}
 else {
  console.log("computeri almaq olmaz");
}
