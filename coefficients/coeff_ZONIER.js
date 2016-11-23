exports.getCoeff_ZONIER = function getCoeff_ZONIER(zone) {
	return coeff_ZONIER[zone];
}

//"comment": "zone tarifaire Responsabilité Civile;RC;Dépannage Remorquage 50 km
var coeff_ZONIER = {
	101: { RC: 1, Remorquage: 0.88},
	102: { RC: 1.02, Remorquage: 0.93},
	103: { RC: 1.07, Remorquage: 0.96},
	104: { RC: 1.12, Remorquage: 0.98},
	105: { RC: 1.18, Remorquage: 1},
	106: { RC: 1.24, Remorquage: 1.03},
	107: { RC: 1.29, Remorquage: 1.08},
	108: { RC: 1.33, Remorquage: 1.14},
	109: { RC: 1.37, Remorquage: 1.23},
	110: { RC: 1.42, Remorquage: 1.33},
	111: { RC: 1.48, Remorquage: 1.42},
	112: { RC: 1.56, Remorquage: 1.53},
	113: { RC: 1.69, Remorquage: 1.53},
	114: { RC: 1.86, Remorquage: 1.53},
	115: { RC: 2.11, Remorquage: 1.53},
	116: { RC: 2.46, Remorquage: 1.53},
	117: { RC: 2.95, Remorquage: 1.53}
}