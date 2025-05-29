import useTime from "./hooks/useTime";
import './App.css'

function App() {
  const day = useTime("day");
  const hour = useTime("hour");

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px"}}>
        <h3>Day: {day}</h3>
        <h3>Hour: {hour}</h3>
      </div>
    </>
  )
}

export default App
