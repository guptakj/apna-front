const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

const heading = document.createElement('h2');
 heading.textContent = "Articles";

app.appendChild(logo);
app.appendChild(heading);
app.appendChild(container);


var request = new XMLHttpRequest();
console.log(userdata);


request.open('POST', "https://gullyboys.herokuapp.com/api/search", true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.content = movie.content.substring(0, 300);
      p.textContent = `${movie.content}...`;

      	var createA = document.createElement('a');
      	createA.setAttribute('onClick', "sessionStorage.setItem('id', "+"'"+movie._id+"'"+")");
      	
        var createAText = document.createTextNode("more");
        createA.setAttribute('href', "./article.html");
        createA.appendChild(createAText);
        p.appendChild(createA);

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();