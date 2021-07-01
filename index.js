let baseurl = 'https://cat-fact.herokuapp.com/facts';

function catsApi() {
    fetch(baseurl)
      .then((Response) => Response.json())
      .then((result) => displayCat(result))
      .catch((error) => console.log(error));
  }
catsApi();

function displayCat(cats){
    console.log(cats);
    for (i = 0; i < cats.length; i++){
        console.log(cats[i].text);
        let facts = document.createElement('p');
        facts.innerText = cats[i].text;
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.appendChild(facts);
    }
}

