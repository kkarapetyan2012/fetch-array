const arr = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

function sortBooksByPercent(x) {
    return x.sort((i1, i2) => {
        return i2.percent - i1.percent
    }).filter(i => i.readStatus === true)
}

console.log(sortBooksByPercent(arr));