import { useState } from 'react';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [formVisible, setFormVisible] = useState(false);
  return (
    <div>
      <Title />
      {formVisible && <Form cancelButton={ () => setFormVisible(false) } />}
      {!formVisible && (
        <button onClick={ () => setFormVisible(true) }>
          Cadastrar nova senha
        </button>
      )}
    </div>
  );
}

export default App;
