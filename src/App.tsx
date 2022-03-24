import "./App.scss";
import CitySearchCard from "./components/CitySearchCard";
import DailyForecastSection from "./components/DailyForecastSection";

function App() {
  return (
    <main className="App">
      <h1 className="App__title">Forecastzy</h1>
      <CitySearchCard />
      <DailyForecastSection />
    </main>
  );
}

export default App;
