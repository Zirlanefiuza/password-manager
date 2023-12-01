type ServiceProps = {
  serviceName: string;
  login: string;
  url: string;
  password: string;
  action: () => void;
};

function Service({ serviceName, login, url, password, action }: ServiceProps) {
  return (
    <div>
      <a href={ url }>{serviceName}</a>
      <p>{login}</p>
      <p>{password}</p>
      <button
        data-testid="remove-btn"
        onClick={ action }
      >
        Remover
      </button>
    </div>
  );
}

export default Service;
