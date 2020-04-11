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


/* function Delete() {
	var elem = document.getElementById("delete");
	elem.remove();
}
 */
var burg = document.getElementById('box3');
burg.onclick = function(){
    Delete();
}

function Delete(){
    document.getElementById("divSadow").classList.toggle('show');

}



/* switch(container.style.backgroundColor === 'green'){
    case container.style.backgroundColor === 'green':
    container.style.backgroundColor = 'red';
    default:
    container.style.backgroundColor = 'green';
    
} */

/* var allLinks = document.links;

for(var i = 0; i < 8; i++){
    var nameLinks = document.createTextNode(allLinks[i].href);
    document.body.appendChild(nameLinks);
} */


function Search() {

    var i = 0;
    var term_i = 0;
    var Int = 0;
    // num check = 0;
    var term = {
        Canada: 5, 
        Moscow: 10,
        Minsk: 15,
        Spain: 20,
        Spain1: 25
    }
    
    
    // alert (typeof (term.Canada));
    // alert( (term.Canada + term.Moscow + term.Minsk + term.Spain)/4 );  // 6
    
    for (var TERM in term) {
      // значения ключей
      // alert( term[TERM] );
    
      term_i = term_i + Number(term[TERM]);
      i++;
    
      Int = Number(term[TERM]);
    }
    
    alert(term_i/i); 
    }
