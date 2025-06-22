import './App.css';
import Quiz from './components/Quiz.js';

function App() {
  return (

    <div className="main-app">
      <div className="quiz-header">
        <h1>It's Time for Quizzz!!</h1>
      </div>
      <Quiz />

      <div className="signature">© 2025 Ashmit</div>
    </div>
    
  );
}

export default App;
