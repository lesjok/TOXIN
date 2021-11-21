import './styles/index.scss'
import $ from "jquery";
const userStack = {
  lang: 'english',
  frame: 'english'
}
const user = {
  name: 'vitali',
  age: '37',
  ...userStack
}

$('.block').html('jqury is working');

console.log(user);