import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <a href="/">Books</a>
        <a href="/quotes">Quotes</a>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;