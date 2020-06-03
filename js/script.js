function Laptop(name, model, serialNumber, yearOfEstablishment, sizeOzu, sizePzu, weight) {
	this.name = name;
	this.model = model;
	this.serialNumber = serialNumber;
	this.yearOfEstablishment = yearOfEstablishment;
	this.sizeOzu = sizeOzu;
	this.sizePzu = sizePzu;
	this.weight = weight;
	this.memory = function () {
		return `ОЗУ память равна ${this.sizeOzu}, ПЗУ память равна ${this.sizePzu}`
	}
}

const laptop = new Laptop('qwe', 12, 13, 123, 123, 123, '123 wqewq');
console.log(laptop);
console.log(laptop.memory());




function UltraBook(name, model, serialNumber, yearOfEstablishment, sizeOzu, sizePzu, weight) {
	Laptop.call(this, name, model, serialNumber, yearOfEstablishment, sizeOzu, sizePzu, weight)
	this.har = function () {
		if (weight <= 1.5) {
			return `название -  ${this.name}, год производства - ${this.yearOfEstablishment}, масса ${this.weight} кг`;
		} else {
			return 'масса ultrabook не должна превышать 1.5 кг';
		}
	}
}

const ultraBook = new UltraBook('ez', 2020, 123, 2019, 321, 321, 1.5);
console.log(ultraBook);
console.log(ultraBook.har());







