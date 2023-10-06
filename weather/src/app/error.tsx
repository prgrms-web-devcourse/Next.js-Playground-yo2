"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <button onClick={() => reset()}>재시도</button>
    </div>
  );
};

export default Error;
