console.log("Let's get this party started!");

// event listener for form submission
$('#search-form').on('submit', async function(evt){
    evt.preventDefault();
    
    const query = $('#search-query').val();
    const gif = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    console.log(gif);
})