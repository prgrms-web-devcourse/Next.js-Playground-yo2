import Link from "next/link";
import CurrentWeatherItem from "../components/CurrentWeatherItem";
const cities = [
  { name: "서울", code: "seoul" },
  { name: "런던", code: "london" },
  { name: "뉴욕", code: "NYC" },
];

const Home = () => {
  return (
    <>
      <h1>날씨 앱</h1>
      <ul className='list-none mb-5 text-sm'>
        {cities.map((city) => (
          <CurrentWeatherItem
            key={city.code}
            cityName={city.name}
            cityCode={city.code}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
