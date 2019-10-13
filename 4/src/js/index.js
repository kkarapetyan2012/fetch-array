
window.onload = function(){
    getItemList(function (data) { 
        createTable(data) 
    })
}
const createTable = function (data) {
    
    const tbody = document.getElementById('tbody');
	let template = '';
	for (let i = 0; i < data.length; i++) {
	  
	  const row = `
			<tr>
			  
			  <td id="title">${data[i].title}</td>
              <td id="releaseDate">${data[i].release_date}</td>
              <td id="director">${data[i].director}</td>
              <td id="description">${data[i].description}</td>
			  
			</tr>
		`;
  
	  template += row 
	}
	
	tbody.innerHTML = template;
}


const getItemList = function (callback) {
    fetch (
        "https://ghibliapi.herokuapp.com/films"
    )
    .then(function (response) {
        if(response.ok && response.status === 200) {
            return response.json()
            .then(function (responseData){
				callback(responseData)
			})
            .catch(function (err) {
                console.log("Error", err);
            });
        }
    })
}

  