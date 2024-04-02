// ? TASK-1 

// var a=parseInt(prompt("Ilk reqem"))
// var b=parseInt(prompt("Ikinci reqem"))
// var c=parseInt(prompt("Ucuncu reqem"))

// var edediOrta=(a+b+c)/3
// alert(edediOrta);



// ! TASK-2

//  var a=parseInt(prompt("Ilk teref"))
//  var b=parseInt(prompt("Ikinci teref"))
//  var c=parseInt(prompt("Ucuncu teref"))

//  if(a>b-c && b>a-c && c>a-b && a<b+c && b< a+c && c< a+b){
//     alert(true);
//  }

//     else{
//         alert(false);
//     }



// ? TASK-3

// var name=prompt("Ad daxil edin...")
// var surName=prompt("Soyadinizi qeyd edin...")

// var fullName=name + " " + surName
// var fullName=alert(fullName)

// ! TASK-4

var ceki=parseInt(prompt('Cekinizi daxil edin'))
var boy=parseInt(prompt("Boyunuzu daxil edin"))

var BMI=ceki / (boy ** 2)

if(BMI > 25){
   alert("sen ne cox yeyirsen");
}

else if(BMI>18.5 && BMI<24.9){
  alert("normalsan");
}
else{
    alert("ariqsanki");
}