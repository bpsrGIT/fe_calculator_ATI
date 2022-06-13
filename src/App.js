import CalculatorApp from './components/CalculatorApp';
import DataContext from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataContext>
        <CalculatorApp />
      </DataContext>
    </div>
  );
}

export default App;
