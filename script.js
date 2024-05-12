let birthYear = prompt('Введите дату  вашего рождения')
let age = 2024 - birthYear

alert('Вам ' + age + " " + 'лет')

if (age >= 1 && age <= 30) {
	alert('Вам не больше от 1 до 30 вы являетесь молодым')
} else if (age >= 30 && age <= 60) {
	alert('Вам не больше от 30 до 60 лет вы являетесь взрослым')
} else if (age >= 60 && age <= 90) {
	alert('Вам не больше от 30 до 60 лет вы являетесь пожилым')
} else if (0 >= age) {
	alert('Вы еще не родились')
} else if (90 >= age) {
	alert('Вам больше 90 лет!')
}
const Numb = prompt('Пожалуйста, введите число')

if (!isNaN(Numb)) {
	alert('Вы ввели число')
} else if (Numb === '') {
	alert('Вы ввели пустую строку')
} else {
	alert('Вы ввели другой тип данных')
}