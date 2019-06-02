import generateText from './sub';
// import moment from 'moment';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);


myPromise.then(() => {

  require(["moment", "./di.js"], function (moment, di) {
    di.default();
    var element = document.createElement('b');
    element.innerHTML = `${moment().format('')}`;
    app.appendChild(element);
  });
});

app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());

app.addEventListener('click', (e) => {
  require(["moment", "./di.js"], function (moment, di) {
    di.default();
    var element = document.createElement('b');
    element.innerHTML = `${moment().format('')}`;
    app.appendChild(element);
  });
})
