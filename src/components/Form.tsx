import { useState } from 'react';

type FormProps = {
  cancelButton: () => void;
  toChangeServices: (service: any) => void;
};

function Form({ cancelButton, toChangeServices }: FormProps) {
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const isPasswordMin = password.length >= 8;
  const isPasswordMax = password.length <= 16;
  const passwordNumbersAndLetters = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const passwordSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const validPasswordClass = 'valid-password-check';
  const invalidPasswordClass = 'invalid-password-check';

  const buttonHandleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const serviceNew   = { serviceName, login, password, url };
    toChangeServices(serviceNew);
  };

  const validForm = () => {
    const nameValid = !!serviceName.trim();
    const loginValid = !!login.trim();
    const passwordValid = isPasswordMin
        && isPasswordMax
        && passwordNumbersAndLetters
        && passwordSpecialChars;

    setIsButtonVisible(nameValid && loginValid && passwordValid);
  };
  return (
    <form onSubmit={ (event) => event.preventDefault() }>
      <div>
        <label htmlFor="serviceName">Nome do serviço </label>
        <input
          type="text"
          id="serviceName"
          value={ serviceName }
          onChange={ (event) => { setServiceName(event.target.value); validForm(); } }
        />
      </div>
      <div>
        <label htmlFor="login">Login </label>
        <input
          type="text"
          id="login"
          value={ login }
          onChange={ (event) => { setLogin(event.target.value); validForm(); } }
        />
      </div>
      <div>
        <label htmlFor="password">Senha </label>
        <input
          type="password"
          id="password"
          value={ password }
          onChange={ (event) => { setPassword(event.target.value); validForm(); } }
        />
      </div>
      <ul>
        <li
          className={ !isPasswordMin
            ? invalidPasswordClass : validPasswordClass }
        >
          Possuir 8 ou mais caracteres
        </li>
        <li
          className={ !isPasswordMax
            ? invalidPasswordClass : validPasswordClass }
        >
          Possuir até 16 caracteres
        </li>
        <li
          className={ !passwordNumbersAndLetters
            ? invalidPasswordClass : validPasswordClass }
        >
          Possuir letras e números
        </li>
        <li
          className={ !passwordSpecialChars
            ? invalidPasswordClass : validPasswordClass }
        >
          Possuir algum caractere especial
        </li>
      </ul>

      <div>
        <label htmlFor="url">URL </label>
        <input
          type="text"
          id="url"
          value={ url }
          onChange={ (event) => setUrl(event.target.value) }
        />
      </div>
      <button
        onClick={ buttonHandleSubmit }
        disabled={ !isButtonVisible }
      >
        Cadastrar
      </button>
      <button onClick={ cancelButton }>Cancelar</button>
    </form>
  );
}

export default Form;
