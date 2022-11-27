/*Реалізувати ієрархію:
ПасажирськийТранспорт (PassengerTransport) =>ТранспортнийЗасіб (Vehicle)
Вантажний Транспорт (FreightTransport) => ТранспортнийЗасіб (Vehicle).
Для базового класу Vehicle реалізувати:
- властивості:
--- dimensions - габарити (об'єкт із довжиною, шириною, висотою),
--- brand - марка,
--- model - модель,
--- manufactureDate - дата виробництва (використовувати вбудований об'єкт Date).
- методи:
--- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
--- getAge() - повертає кількість років із дня виробництва.
*/
class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    (this.dimensions = {
      a: dimensions.a,
      b: dimensions.b,
      c: dimensions.c,
    }),
      (this.brand = brand);
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getFullInfo() {
    return `brand ${this.brand} model ${this.model} age ${this.getAge()}`;
  }
  getAge() {
    return new Date().getFullYear() - this.manufactureDate.getFullYear();
  }
}
/*const vi = new Vehicle(
  { a: 124, b: 223, c: 313 },
  "abstract brand",
  "abstract model",
  new Date("1995-12-17T03:24:00")
);
console.log("vi.getFullInfo()", vi.getFullInfo());*/
/*
Дочірній клас PassengerTransport розширюється:
- властивостями:
--- passengerLimit - максимальна кількість пасажирських місць,
--- passengerCount - кількість зайнятих пасажирських місць,
- методом addPassenger() для додавання ще одного пасажира з перевіркою можливості додавання (чи ще незайняті місця) - повертає true (якщо пасажир доданий) або false (якщо не доданий).
Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб: 
бренд, 
модель, 
вік, 
максимальна кількість пасажирських місць.
 */
class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount++;
      return true;
    }
    return false;
  }
  getFullInfo() {
    return `${super.getFullInfo()} passengerLimit ${this.passengerLimit}`;
  }
}
const bus = new PassengerTransport(
  { a: 1024, b: 223, c: 313 },
  "ikarus",
  "21",
  new Date("1985-12-17T03:24:00"),
  45,
  44
);
console.log("bus.getFullInfo()", bus.getFullInfo());
console.log("bus.addPassenger()", bus.addPassenger());
console.log("bus.addPassenger()", bus.addPassenger());
/*
Дочірній клас FreightTransport розширюється:
- властивістю:
--- capacity - вантажопідйомність,
- методом checkLoadingPossibility(weight) - для перевірки можливості завантаження маси weight. Повертає булеан.
Перевизначити метод getFullInfo:
бренд, 
модель, 
вік,
вантажопідйомність.
Створити об'єкти всіх класів ієрархії, протестувати роботу методів.
*/
class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return this.capacity >= weight;
  }
  getFullInfo() {
    return `${super.getFullInfo()} capacity ${this.capacity}`;
  }
}
const car = new FreightTransport(
  { a: 124, b: 1223, c: 313 },
  "man",
  "v21",
  new Date("1997-12-17T03:24:00"),
  4500
);
console.log("bus.getFullInfo()", car.getFullInfo());

console.log(
  "bus.checkLoadingPossibility(4500)",
  car.checkLoadingPossibility(4500)
);
console.log(
  "bus.checkLoadingPossibility(4501)",
  car.checkLoadingPossibility(4501)
);
