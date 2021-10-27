window.onload=function(){
  var searchBtn = document.getElementById("searchBtn");
  
  searchBtn.addEventListenser("click",(e)=>{
    e.preventDefault();
      var searchQuery = document.getElementById("name").value;
      var url = "http://localhost:8080/superheroes.php?name=" + searchQuery;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadstatechange = showList;
    httpRequest.open("GET", url);
    httpRequest.send();
    
    function showList(){
            if(httpRequest.readyState===XMLHttpRequest.DONE){
                if(httpRequest.status===200){
                    var response= httpRequest.responseText;
                    var result=document.getElementById("results");
                    result.innerHTML=response.trim();
                }else{
                    alert("There was a problem with this request");
                }
            }
        }
    });

}
    
