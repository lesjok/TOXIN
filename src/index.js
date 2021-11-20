import './styles/index.scss'

const userStack = {
  lang: 'english',
  frame: 'english'
}
const user = {
  name: 'vitali',
  age: '37',
  ...userStack
}

console.log(user);