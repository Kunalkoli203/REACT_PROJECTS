import { useState } from 'react';

function App() {

  let water = 0;

  const [uwater, setUwater] = useState(0);

  const drinkWater = () => {
    water++;

    if (uwater < 3000) {
      setUwater(uwater + 250);
    } else {
      alert(" Daily Goal Completed...");
    }

    console.log("water = ", water);
    console.log("uwater = ", uwater);
  }

  const removeWater = () => {

    if (uwater > 0) {
      setUwater(uwater - 250);
    } else {
      alert(" Negative not allowed...");
    }

  }

  return (
    <>
      <h1> Water Intake Tracker</h1>

      <button onClick={drinkWater}>Drink Water</button>
      <br /><br />

      <button onClick={removeWater}>Remove Water</button>
      <br /><br />

      <button onClick={() => setUwater(0)}>RESET</button>

      <h3>water : {water}</h3>

      <h3>Water Drank : {uwater} ml</h3>

      <h3>Goal : 3000 ml</h3>

      <h3>
        {uwater >= 3000
          ? " Goal Completed"
          : " Keep Drinking"}
      </h3>
    </>
  )
}

export default App;
