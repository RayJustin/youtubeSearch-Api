$(document).ready(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function showResults(results) {
	var html = "";
	$.each(results, function(index, value){
	html += '<p class="text-center col-md-6"><img src="' + value.snippet.thumbnails.default.url +'"><br>' + value.snippet.title + '<br><a target="_blank" href="https://www.youtube.com/watch?v='+ value.id.videoId + '"><button type="button" class="btn btn-danger">Watch!</button></a></p>';
	});
	$('#search-results').html(html);
}

function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: 'AIzaSyAE_qESdmPw_BYZ5Q2jtuuQQlelTcgAFpc',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function(data){
			showResults(data.items);
	});
	}


