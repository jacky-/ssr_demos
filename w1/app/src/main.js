import sub from './sub';
import moment from 'moment';
import styles from '../styles/main.css';


let app = document.createElement('div');
const myPromise = Promise.resolve(42);

app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
console.log(sub());

app.addEventListener('click', (e) => {
  require.ensure([], function (require) {
    var di = require('./di');
    di.default();
    var element = document.createElement('b');
    element.innerHTML = `${moment().format('')}`;
    app.appendChild(element);
  })
})
