import Link from "next/link";
import { getCurrentWeather } from "../utils/getCurrentWeather";
import CurrentWeatherCondition from "./CurrentWeatherCondition";

type Props = {
  cityName: string;
  cityCode: string;
};

const CurrentWeatherItem = async ({ cityName, cityCode }: Props) => {
  const { current, location } = await getCurrentWeather(cityCode);
  const path = `/${cityCode}?name=${cityName}`;
  return (
    <li>
      {cityName}
      <CurrentWeatherCondition
        timeZone={location.tz_id}
        conditionText={current.condition.text}
        conditionIcon={current.condition.icon}
      />
      <Link href={path}>일기 예보 확인하기</Link>
    </li>
  );
};

export default CurrentWeatherItem;
