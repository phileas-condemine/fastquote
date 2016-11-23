exports.getCoeff_age = function getCoeff_age(age) {
	var ageInvertal = 0;
	for(var i=0; i<coeff_age.length; i++) {
		if(age < coeff_age[i].age) {
			ageInvertal = i - 1;
			break;
		}
	}
	return coeff_age[ageInvertal].coeff;
}

var coeff_age = [
	{ age: 18, coeff:1},
	{ age: 30, coeff:0.9},
	{ age: 40, coeff:0.85},
	{ age: 45, coeff:0.9},
	{ age: 50, coeff:0.85},
	{ age: 55, coeff:0.9},
	{ age: 60, coeff:1}
]