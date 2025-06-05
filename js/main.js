// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.
//Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 


const bankAccount = {
  ownerName: "Arten",
  accountNumber: "1",
  balance: 100,
  

  deposit(money) {
    this.balance += money
    alert(`Ваш баланс поповнено на ${money} на вашому рахунку: ${this.balance} гривень`)
  },


  withdraw(money) {
    if (money <= this.balance) {
        this.balance -= money
        alert(`З вашого рахунку знято ${money} на вашому рахунку: ${this.balance} гривень`)
    } else {
      alert("Недостатньо коштів на вашому рахунку!!!")
    }
  },
}


console.log(bankAccount);
if (confirm("ви бажаєте поповнити рахунок?")) {
const userInput = parseFloat(prompt("Яку сумму покласти на рахунок?"))
if (!isNaN(userInput) && userInput > 0) {
  bankAccount.deposit(userInput)
} else {
  alert("Не коректно введені дані!")
}
} else if(confirm("Ви бажаєте зняти гроші?")) {
 const userInput = parseFloat(prompt("Яку сумму хочете зняти?"))
if (!isNaN(userInput) && userInput > 0) {
  bankAccount.withdraw(userInput)
} else {
  alert("Не коректно введені дані!")
} 
} else {
alert("Операція скасована, допобачення!")
}


// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


const weather = {
  temperature: null,
  humidity: 14,
  windSpeed: 18,

  termometer() {
    return this.temperature < 0;
  },
};

const inputTemp = Number(prompt("Введіть градусну міру"));
weather.temperature = inputTemp;


// // Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password.


const user = {
  name: "Artem",
  email: "artemdacok26@gmail.com",
  password: "104599",

  login(newEmail, newPassword) {
    let message = "failed";
    if (this.email === newEmail && this.password === newPassword) {
      message = "successfully";
    }
    return message;
  },
};
console.log(user.login("artemdacok26@gmail.com", "104599"));







// --------------------------------------------------------------------------------