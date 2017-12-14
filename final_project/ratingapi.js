const binId = "9cafa824-e0d6-11e7-8b56-edb45edee506";
//binId = "ga3a7"

function getRatings() {
	let ratings;
	$.ajax({
		url: "https://jsonblob.com/api/jsonBlob/"+binId,
		async: false,
		success: function(data) {
			//console.log(data);
			ratings = data;
		}
	});
	return ratings;
}	
function addRating(rating){
	const newRatings = this.getRatings();
	newRatings.ratings.push(rating);
	$.ajax({
    url:"https://jsonblob.com/api/jsonBlob/"+binId,
    type:"PUT",
    data: JSON.stringify(newRatings),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    async: false,
    success: function(data, textStatus, jqXHR){

    }
});  
}
