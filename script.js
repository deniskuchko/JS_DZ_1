function goToPage()
{
	document.location.href = "http://www.site.ru";
}

var container2 = document.getElementById('box');

function editcolor() {
    if(container2.style.backgroundColor === 'greenyellow'){
        container2.style.backgroundColor = 'red';
    } else{
        container2.style.backgroundColor = 'greenyellow';
    }
} 

var burg = document.getElementById('box3');
burg.onclick = function(){
    Delete();
}

function Delete(){
    document.getElementById("divSadow").classList.toggle('show');
    document.getElementById("box4").classList.toggle('poiavlenie');
    document.getElementById("box5").classList.toggle('poiavlenie');
    
}

