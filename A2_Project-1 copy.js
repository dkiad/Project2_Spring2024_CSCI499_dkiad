function apisearch(){
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyDTGbjL-Kk17fdvv7UUM2qJbEs4dJ7Ooy4&cx=a1473ae24b23b4248=" + $("#query").val(),
        success: function (result) {
            console.log('data: ', result);
            if (result.items && result.items.length > 0) {
                var searchOutput = '';
                var len = result.items.length;
                for (i = 0; i < len; i++) {
                    searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
                }
                $("#searchResults").html(searchOutput);
            } else {
                $("#searchResults").html("No results found for the given query.");
            }
        },
        error: function() {
            $("#searchResults").html("Error occurred while fetching search results.");
        }
    });   
}



// Event listener for search button
$('#searchButton').click(function(event) {
    event.preventDefault();
    apisearch();
});

function changeBackgroundColor() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
 // Event listener for "Change Background Color" button
 $('#changeBackgroundButton').click(function() {
    changeBackgroundColor();
});

// Function to handle "I'm Feeling Lucky" button click
$('#luckyButton').click(function(event) {
    event.preventDefault(); // Prevent default behavior
    apiSearchLucky(); // Call the lucky search function
});

 // Event listener for "Toggle Fade" button
$('#toggleFadeButton').click(function() {
    toggleFade(); // Call the function to toggle fade
});
// Function to toggle fade
function toggleFade() {
    $('header, #query, #searchButton').toggleClass('fade');
}
// DO NOT CHANGE CODE ABOVE EXCEPT LINE 5 AS STATED IN THE ASSIGNMENT. YOU MAY COPY THE ABOVE FUNCTION FOR QUESTION (4) OF JS.

// START TYPING BELOW

