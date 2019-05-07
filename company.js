console.log("Hello")
function showposts(){

            

    console.log("Inside show posts");
    var userdata = JSON.parse(sessionStorage.getItem('id'));
    console.log(userdata);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
    };
    xhttp.open("GET", "https://gullyboys.herokuapp.com/api/" + 1 + "/show_posts_by_company" , true);
    xhttp.send();
    console.log("Request sent");
}
showposts();


