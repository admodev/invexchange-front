// Utils
import { checkAuth } from '../Utils/checkAuthStatus';

const Welcome: React.FC = () => {
  return (
    <div>
      <h1>
        Welcome to <strong>InvExchange</strong>!
      </h1>
      <button onClick={() => checkAuth()}>Continue</button>
    </div>
  );
};

export default Welcome;
