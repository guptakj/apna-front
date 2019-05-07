
console.log("Chalo bhai");

function createpost(){
    console.log("Create post");



    var title = document.getElementById('title').value;
    var content = document.getElementById("content").value;
    var userdata= JSON.parse(sessionStorage.getItem('uid'));
    // var cid=ls.companyname;
    var tag = document.getElementById("tag").value;
    var cid;
    if(userdata.companyname=="BHARAT DYNAMICS LIMITED (BDL)")
    cid=1;
    else if(userdata.companyname=="HINDUSTAN AERONAUTICS LIMITED (HAL)")
    cid=2;
    else if(userdata.companyname=="BHARAT ELECTRONICS LIMITED (BEL)")
    cid=3;
    else if(userdata.companyname=="GOA SHIPYARD LIMITED (GSL)")
    cid=4;
    console.log(cid);

    var xhttp = new XMLHttpRequest();

    var post= {
        title : title,
        content : content,
        username : userdata.name,
        companyid : cid,
        tag : tag
    }       
    
    console.log(post);

    xhttp.onreadystatechange = function() {
                 
        if (this.readyState == 4 && this.status == 200) {
            console.log("Post successful");
        }
        
    };
    xhttp.open("POST","https://gullyboys.herokuapp.com/api/post_create"  , true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(post));
   
}
