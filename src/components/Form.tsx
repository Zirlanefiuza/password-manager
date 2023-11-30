function Form() {
  return (
    <form>
      <div>
        <label htmlFor="serviceName">Nome do serviço </label>
        <input
          type="text"
          id="serviceName"
        />
      </div>
      <div>
        <label htmlFor="login">Login </label>
        <input
          type="text"
          id="login"
        />
      </div>
      <div>
        <label htmlFor="password">Senha </label>
        <input
          type="password"
          id="password"
        />
      </div>
      <div>
        <label htmlFor="url">URL </label>
        <input
          type="text"
          id="url"
        />
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
      <div>
        <button>Cancelar</button>
      </div>

    </form>
  );
}

export default Form;
