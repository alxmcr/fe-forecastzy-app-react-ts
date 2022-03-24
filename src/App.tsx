import "./App.css";
import CitySearchCard from "./components/CitySearchCard";
import DailyForecastSection from "./components/DailyForecastSection";

function App() {
  return (
    <main className="App">
      <h1>Forecastzy</h1>
      <CitySearchCard />
      <DailyForecastSection />
    </main>
  );
}

export default App;
