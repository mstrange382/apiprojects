let baseurl = 'https://catfact.ninja/fact';

function catsApi() {
    fetch(baseurl)
      .then((Response) => Response.json())
      .then((result) => displayCat(result))
      .catch((error) => console.log(error));
  }




function displayCat(cats){
    console.log(cats);
    
        console.log(cats.fact);
        let facts = document.createElement('p');
        facts.innerText = cats.fact;
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.appendChild(facts);
         
}



