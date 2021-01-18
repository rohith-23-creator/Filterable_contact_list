const Filter = document.getElementById("input");

Filter.addEventListener("keyup" , filterValues)
 
function filterValues(){
    let filteredOnes = Filter.value.toUpperCase();
   
    let ul = document.getElementById("list")

    let li = ul.querySelectorAll("li.list-group-item");

    for(let i=0 ; i < li.length ; i++){

        let a = li[i].getElementsByTagName("a")[0]

        if(li[i].innerHTML.toUpperCase().indexOf(filteredOnes) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
            
        }
    }

  

}



