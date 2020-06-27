console.log("Let's get this party started!");

// event listener for form submission
$('#search-form').on('submit', async function(evt){
    evt.preventDefault();
    
    const query = $('#search-query').val();
    const gifSearch = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    const gifList = gifSearch.data.data;
    
    // pick a random gif from the list
    const index = Math.floor(Math.random() * gifList.length);

    // append the gif to the DOM
    const url = gifList[index].images.original.url;
    $('#gifs').append(`<img src="${url}">`);
})

$('#remove-gifs').on('click', function() {
    $('#gifs').empty();
})