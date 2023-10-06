export type Response = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
};

export const getTime = async (timeZone: string): Promise<Response> => {
  const response = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`, {
    next: { tags: ["time"] },
  });

  if (!response.ok) throw new Error("시간 정보를 불러오는데 실패했습니다.");
  return response.json();
};
