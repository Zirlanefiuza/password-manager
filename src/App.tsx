import { useState } from 'react';
import Form from './components/Form';
import Title from './components/Title';
import Service from './components/Service';
import { ServiceProps } from './TypeProps';

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [service, setService] = useState<ServiceProps[]>([]);
  const [containPasswords, setContainPasswords] = useState(true);
  const [toPasswords, setToPasswords] = useState(true);

  const addService: any = (services: ServiceProps) => {
    setService([...service, services]);
    setFormVisible(false);
    setContainPasswords(false);
  };

  const deleteServices = (services: ServiceProps) => {
    const actualServices = service.filter((serviceFound) => services
      .serviceName !== serviceFound.serviceName);
    setService(actualServices);
    setContainPasswords(true);
  };

  const handleSPasswordsChange = () => {
    setToPasswords((prevToPasswords) => !prevToPasswords);
  };

  return (
    <div>
      <Title />
      {formVisible && <Form
        toChangeServices={ addService }
        cancelButton={ () => setFormVisible(false) }
      />}
      {!formVisible && (
        <button onClick={ () => setFormVisible(true) }>
          Cadastrar nova senha
        </button>
      )}
      <div>
        {containPasswords
          && <h2>Nenhuma senha cadastrada</h2>}
      </div>
      <div>
        {service.map((services) => (<Service
          key={ services.serviceName }
          serviceName={ services.serviceName }
          url={ services.url }
          login={ services.login }
          password={ toPasswords
            ? services.password : '******' }
          action={ () => deleteServices(services) }
        />))}
      </div>
      {!containPasswords && (
        <div>
          <label>
            Esconder senhas
            <input
              type="checkbox"
              checked={ !toPasswords }
              onChange={ handleSPasswordsChange }
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default App;
