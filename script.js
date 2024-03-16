const input = document.querySelector("#number");
const button = document.querySelector("#convert-btn");
const output = document.querySelector("#output");
console.log(input);
console.log(button);
console.log(output);
const romanNumerals = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
//გავსორტეთ და ახალ ერეიში ჩავფუშეთ რიცხვები რომელიც იწყება 1000 დან
//თუმცა ჯერ ისევ აღიქმება სტრინგებად ამიტომ
let sortedArr = Object.keys(romanNumerals).sort((a, b) => b - a);
// ეს არის ცარიელი ერეი სადაც ჩავფუშავთ ამ სტრინგ რიცხვებს რომელიც იქნება მხოლოდ
//რიცხვები რომ შევასრულოთ მათემატიკური მოქმედებები
let arrNum = [];
// ცარიელი ცვლადი გვჭირდება ინფუთის გასასუფთავებლად
let emptyInput = "";

button.addEventListener("click", () => {
  convertor();
  input.value = emptyInput;
});

const convertor = () => {
  if (input.value === "") {
    return (
      (output.textContent = `Please enter a valid number`),
      (output.style.color = "red")
    );
  }
  if (input.value < 0) {
    return (
      (output.textContent = `Please enter a number greater than or equal to 1`),
      (output.style.color = "red")
    );
  }
  if (input.value >= 4000) {
    return (
      (output.textContent = `Please enter a number less than or equal to 3999`),
      (output.style.color = "red")
    );
  } else {
    //ეს არის ცარიელი ერეის სადაც შევინახავთ რომანულად დაკონვერტირებულ სიმბოლოებს
    let romanArr = [];
    // ამ ფორ ციკლში ვამოწმებთ თუ i ნაკლებია სორტირებული ერეის სიგრძეზე
    // რომდენიცაა სორტირებული ერეის სიგრძე იმდენჯერ მოხდეს მოქმედება
    for (let i = 0; i < sortedArr.length; i++) {
      // ახალ ცარიელ ერეიში ჩაფუშოს რიცხვებად ის თითოეული "სტრინგი რიცხვი"
      // რომელსაც შეიცავს
      // [i] ბრეკეტებში არის ის თითოეული მნიშვნელობა რასაც sortedArr ან  arrNum ი შეიცავს
      arrNum.push(Number(sortedArr[i]));
      // სანამ მომხმარებლის მიერი შემოყვანილი რიცხვი მეტია ან უდრის arrNum
      //  ნამში არსებულ თითოეულ რიცხვზე ცალ-ცალკე
      while (input.value >= arrNum[i]) {
        //მანამდე ფუშე მაგ რიცხვების შესაფერისი რომაული სიმბოლოები romanArr ში.
        romanArr.push(romanNumerals[sortedArr[i]]);
        //და თითოეული ჩაფუშვის მერე შემოყვანილი რიცხვს გამოაკელი ის რიცხვი რაც
        //ჩავფუშეთ რომ მიღოთ შესაფერისი სიმბოლოების ჯამი და ასევე არ გადავვარდეთ
        //უსასრულობაში
        input.value -= arrNum[i];
      }
    }
    output.textContent = `${romanArr.join("")}`;
    output.style.color = "#e55808";
  }
};
