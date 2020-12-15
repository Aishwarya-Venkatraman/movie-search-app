import './App.css';
import SearchMovies from './SearchMovies';

function App() {
  return (
    <div className="app-container">
      <h1 className="title">Movie Search Application using React</h1>
      <SearchMovies />
      <div class="attribution">
        <p>This application makes use of movie database api</p>
        <img src="/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" />
      </div>
    </div>
  );
}

export default App;
