import { getTime } from "../utils/getTime";

type Props = {
  timeZone: string;
  conditionText: string;
  conditionIcon: string;
};

export const CurrentWeatherCondition = async ({ timeZone, conditionText, conditionIcon }: Props) => {
  const time = await getTime(timeZone);

  return (
    <>
      <span>
        / {time.dayOfWeek} / {time.hour}시 {time.minute}분
      </span>
      <p>{conditionText === "Sunny" ? "햇빛 쨍쨍" : conditionText === "Mist" ? "안개가 자욱" : "꿀꿀하네요"}</p>
      <img
        src={`https:${conditionIcon}`}
        alt='날씨 아이콘'
      />
    </>
  );
};

export default CurrentWeatherCondition;
