"use client";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();

  return (
    <button
      className='bg-lime-400 text-white rounded-lg px-2 py-2 text-center'
      onClick={() => router.push("/")}>
      홈으로
    </button>
  );
};

export default Button;
