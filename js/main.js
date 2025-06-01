// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Artem",
  accountNumber: "first",
  balance: 100,

    newBalance(deposit, withdraw) {
    this.balance += deposit;
    alert(`Додано ${deposit}$. Залишок: ${this.balance}$`);
    if (withdraw <= this.balance) {
      this.balance -= withdraw;
      alert(`Знято ${withdraw}$. Залишок: ${this.balance}$`);
    } else {
      alert(`Недостатньо коштів. Залишок: ${this.balance}$`);
    }
  },
};
bankAccount.newBalance(25, 50);

console.log(bankAccount);
