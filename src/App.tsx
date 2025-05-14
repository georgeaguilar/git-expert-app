import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([
    'Dragon Ball Z',
    'Jujutsu Kaisen',
  ]);

  function addCategory() {
    setCategories((cat) => ['Marvel', ...cat]);
  }

  return (
    <>
      <div>GitExpertApp</div>
      <button onClick={addCategory}>agregar</button>
      <ol>
        {categories.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
