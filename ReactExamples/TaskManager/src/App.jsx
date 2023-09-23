import './App.css'
import MyButton from './components/MyButton';

let message = "Hello React!";
// React Functional Component
function Hello() {
  return <h1>{message} {20 * 434} {new Date().getHours() % 12} </h1>
}

// JSX syntax
// React Element <Hello />
function App() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
  const daysNew = days.map((item) => <h1>{item} </h1>)
  {/* daysNew = [" <h1>Mon<h1>", "<h1>Tues</h1>", "<h1>Wed</h1>", "Thurs", "Fri"]; */ }
  console.log(daysNew);
  return (
    // <></>//React Fragment
    <>
      {daysNew}
      <Hello />
      <MyButton text="Register" class="large" />
    </>
  )
}

export default App






