
window.onload = function(){
    getItemList(function (data) { 
        createTable(data) 
    })
}
const createTable = function (data) {
    
    const descriptionBlock = document.getElementById('description-block');
	// let template = '';
	// for (let i = 0; i < data.length; i++) {
	  
	  const template = `
			<div class="d-flex">
                <div class="info-block">Title:</div>
                <div id="title" class="description">${data.title}</div>
            </div>
            <div class="d-flex">
                <div class="info-block">Description:</div>
                <div id="description" class="description">${data.description}</div>
            </div>
            <div class="d-flex">
                <div class="info-block">Director:</div>
                <div id="director" class="description">${data.director}</div>
                </div>
            <div class="d-flex">
                <div class="info-block">Producer:</div>
                <div id="producer" class="description">${data.producer}</div>
            </div>
            <div class="d-flex">
                <div class="info-block">Release Date:</div>
                <div id="releaseDate" class="description">${data.release_date}</div>
            </div>
			  
			
		`;
  
        // descriptionBlock = row 
	// }
	
	descriptionBlock.innerHTML = template;
}


const getItemList = function (callback) {
    fetch (
        "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
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

  