const arr = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];
window.onload = function(){
    const div = function () {
        const tbody = document.getElementById('tbody');
        let row = '';
        for(let i = 0; i < arr.length; i++){
            const tr = `
                <tr>
                    <td>${arr[i].book}</td>
                    <td>${arr[i].readStatus}</td>
                    <td>${arr[i].percent}</td>
                </tr>
            `
            row += tr;
        }
        tbody.innerHTML = row;
    }
    div()
}