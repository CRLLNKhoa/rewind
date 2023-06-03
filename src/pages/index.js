import Image from "next/image";
import { Inter } from "next/font/google";
import { data } from "./api/hello";
import { time } from "./api/time";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [days, setDays] = useState({
    to: 0,
    from: 0,
  });
  const [toNum, setTo] = useState(0);

  const [fromNum, setFrom] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [tab,setTab] = useState(1)

  const handle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTo(days.to);
      setFrom(days.from);
    }, 300);
    setIsLoading(false);
  };

  const reset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTo(0);
      setFrom(0);
      setDays({ to: 0, from: 0 });
    }, 1000);
    setIsLoading(false);
  };
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="flex justify-center items-center bg-slate-950 w-fulll min-h-screen">
     <Head>
        <title>Code by Lương Khoa</title>
        <meta name="Check rewind" content="Website này tôi làm ccho vui, nếu bạn có không thích thì tôi thật lòng xin lỗi bạn  vì điều này! " key="desc" />
      </Head>
      {tab===1&&<div className="border w-full lg:w-[80%] min-h-[80%] p-4 text-white flex justify-center items-center flex-col gap-2">
        <h1 className="text-[20px]">Mốc Rewind Nhanh</h1>
        <p className="pb-2">Cost càng nhỏ thời gian rewind càng nhanh</p>
        <div className="flex flex-wrap lg:flex-row flex-col gap-4">
          <input
            className="bg-transparent border outline-none p-2 rounded-lg"
            type="number"
            placeholder="Từ"
            onChange={(e) => setDays({ ...days, to: e.target.value })}
          />
          <input
            className="bg-transparent border outline-none p-2 rounded-lg"
            type="number"
            placeholder="Đến"
            onChange={(e) => setDays({ ...days, from: e.target.value })}
          />
          <button
            onClick={handle}
            className="bg-sky-700 px-4 py-2 rounded-full hover:bg-red-500"
          >
            Tra cứu
          </button>
        </div>
        {isLoading && <p className="text-red-900">Đang tra cứu!</p>}
        {!isLoading && (
          <div className="w-full mt-4 flex flex-col gap-2">
            {data
              .filter(
                (filtered) => toNum <= filtered.day && filtered.day <= fromNum
              )
              .map((item) => (
                <Item
                key={item.day}
                  day={item.day}
                  skip={item.skip}
                  ticket={item.tickets}
                  cost={item.cost}
                />
              ))}
          </div>
        )}
      </div>}
     
      <button className="fixed text-white  bg-sky-600 bottom-[20px] right-[20px] px-4 py-2 rounded-full" onClick={scrollToTop}>
            ^
        </button>
        <Link href="/time" className="fixed text-white  bg-sky-600 bottom-[20px] left-[20px] px-4 py-2 rounded-full" onClick={scrollToTop}>
            Thời gian  trung  bình
        </Link>
    </div>
  );
}

export const Item = ({ day = 0, skip = 0, ticket = 0, cost = 0 }) => {
  const color = (cost) => {
    if(cost<200){
      return "text-lime-400"
    }
    if(cost<220){
      return "text-lime-500"
    }
    if(cost<260){
      return "text-lime-600"
    }
    if(cost<300){
      return "text-red-700"
    }
    if(cost<340){
      return "text-red-800"
    }
    if(cost<380){
      return "text-red-900"
    }
    if(cost>380){
        return "text-red-700"
    }
  }
  return (
    <div className="w-full flex justify-between">
      <span>Day: {day}</span>
      <span>Skip: {skip}</span>
      <span>Tickets: {Math.floor(ticket)}</span>
      <span className={color(cost)}>Cost: {Math.floor(cost)}</span>
    </div>
  );
};
