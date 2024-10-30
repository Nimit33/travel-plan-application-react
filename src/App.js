import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);
  ///use state mein data as prop chal gya from data.js se
  // and tourse wale variable mein initialize ho jayega


  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    //naya tour banaya aur jahan pe bhi id equal nhi hai usko hata diya
    setTours(newTours);
  }

  if (tours.length === 0) {
    //agr tourse ka lenght 0 hai toh mein apana yeh khudka ui return krunga
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          {/* click krne pr tourse ke andar wapas se data dal jayega */}
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {/* tourse ko as a prop pass kr diya tours component mein */}
    </div>
  )
};

export default App;
