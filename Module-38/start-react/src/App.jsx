import { useState } from 'react';
import Actroes from './Actroes';
import './App.css';
import Book from './BookList';
import Singer from './Singer';


const Books = [
  { id: 1, titel: "Physics", price: 250 },
  { id: 2, titel: "Math", price: 350 },
  { id: 3, titel: "Chmistry", price: 270 },
  { id: 4, titel: "Biology", price: 200 },
  { id: 5, titel: "English", price: 150 },
]


const actressName = ["Arfine Shuvo", "Sakib Khan", "Shoriful Raj", "Bappy", "Sheum"];


const SingerName = [
  { id: 1, name: "Lota Mongerker", age: 80 },
  { id: 2, name: "kumer Sanu", age: 34 },
  { id: 3, name: "Nosikata", age: 54 },
  { id: 4, name: "Hemase", age: 44 },
  { id: 5, name: "xxx", age: 30 },
]

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Vite + React</h1>

      <Book Books={Books}></Book>

      {
        actressName.map(name => <Actroes name={name}> </Actroes>)
      }

      {
        SingerName.map(singer => <Singer id={singer.id} name={singer.name} age={singer.age} ></Singer>)
      }

      {/* <Todo task="learn React" isDone={true} ></Todo>
      <Todo task="Explor core concept" isDone={false} ></Todo>
      <Todo task="Try jsx" isDone={true} ></Todo> */}


      {/* <Person name="Suvo Datta" age="23" job="JavaScript Developer" country="Bangladesh" ></Person>
      <Person name="Jhone" age="35" job="Developer" country="USA" ></Person>
      <Student></Student>
      <Developer developer='Font-end' language='JavaScript' exprence="7 " ></Developer>
      <Developer developer='Back-end' language='TypeScript' exprence="5" ></Developer>
      <Developer developer='full Stack' language='JavaScript, TypeScript, Python' exprence="3" ></Developer> */}
    </>
  )
}

const Person = (props) => {
  const { name, age, job, country } = props
  return (
    <div>
      <h2>My name is {name}. I am {age} years old and a {job}.I live in {country}</h2>
    </div>
  )
}

const Student = () => {
  return (
    <div className='student'>
      <h2>Lorem ipsum dolor sit amet consectetur elit.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi laudantium facere aliquam numquam, nesciunt magnam ad, voluptas est, facilis porro cum odit. Dolorum laboriosam rem veniam eos voluptatum deleniti corporis.</p>
      <button>Loren More</button>
    </div>
  )
}

// const Developer = (props) => {
const Developer = ({ developer, language, exprence }) => {
  const developetStyle = {
    border: "2px solid red",
    borderRadius: '1rem',
    padding: "1rem",
    marginTop: "2rem"
  }

  return (
    <div style={developetStyle}>
      <h2>{developer} Developer</h2>
      <p>I know {language}. I am {exprence} years expreance.</p>
      <button>Here me</button>
    </div>
  )
}

export default App
