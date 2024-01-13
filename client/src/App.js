import { useEffect } from "react"
function App() {
  useEffect(() => {
    fetch("/movies")
    .then((r) => r.json())
    .then((movies) => console.log(movies));
  }, []);
 
  return <h1>Check the Console for a list of movies</h1>
}

export default App;
