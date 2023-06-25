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

  const [fromNum, setFrom] = useState(1000);

  const [isLoading, setIsLoading] = useState(false);

  const [tab,setTab] = useState(1)

  const [menu,setMenu] = useState(false)

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
    <div className="flex justify-center items-center bg-slate-950 w-fulll min-h-screen pb-[100px]">
      {tab===1&&<div className=" w-full lg:w-[80%] min-h-[80%] p-4 text-white flex justify-center items-center flex-col">
        <b className="text-[24px] font-bold">Quick Rewind </b>
        <p className="pb-2">The lower the cost, the faster the rewind time</p>
        <div className="flex font-bold flex-wrap items-center lg:flex-row gap-4 text-black bg-white rounded-lg">
          <div className="flex w-full lg:flex-1 items-center lg:pt-0 justify-between pt-4">
            <input
              className="bg-transparent w-1/3 text-center outline-none p-2 rounded-lg"
              type="number"
              placeholder="From"
              onChange={(e) => setDays({ ...days, to: e.target.value })}
            />
            <img className="w-12 h-8" src="/right.svg" alt=""/>
            <input
              className="bg-transparent text-center w-1/3 outline-none p-2 rounded-lg"
              type="number"
              placeholder="To"
              onChange={(e) => setDays({ ...days, from: e.target.value })}
            />
          </div>
          <button
            onClick={handle}
            className="bg-sky-700 lg:w-[100px]  rounded-b-lg lg:rounded-e-lg w-full px-4 py-2 hover:bg-red-500 text-white font-semibold duration-500"
          >
            Search
          </button>
        </div>
        {isLoading && <p className="text-red-900">Đang tra cứu!</p>}
        {!isLoading && (
          <div className="w-full mt-4 flex flex-col gap-2 role:list select-none bg-slate-800 rounded-t-lg text-[20px]">
            <div className="flex justify-around bg-slate-500 font-bold rounded-lg">
              <span className="w-1/4 flex justify-center items-center">Max day</span>
              <span className="w-1/4 flex justify-center items-center">Skip day</span>
              <span className="w-1/4 flex justify-center items-center">Tickets</span>
              <span className="w-1/4 flex justify-center items-center">Cost</span>
            </div>
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
     
      <button className="fixed text-white bottom-[20px] right-[20px] px-4 py-2 rounded-full" onClick={scrollToTop}>
            <img className="w-12" src="/top.svg" alt=""/>
        </button>
        <div className="fixed cursor-pointer z-20 text-white bottom-[16px] left-[8px] px-4 py-2 rounded-full" onClick={()=>setMenu(!menu)}>
            <img className="w-12" src="/new.svg" alt=""/>
        </div>
        <Link target="_blank" href="https://www.facebook.com/lnkhoa1205" className={`fixed cursor-pointer z-20 text-white ${menu?"bottom-[12px]":"-bottom-[80px]"} transition-all duration-500 left-[80px] px-4 py-2 rounded-full`}>
            <img className="w-12" src="/fb.svg" alt=""/>
        </Link>
        <div className={`fixed text-white flex flex-col gap-6 bg-white h-[200px] w-14 z-10 ${menu?"bottom-[20px]":"-bottom-[200px]"} transition-all duration-500 left-[20px] px-4 py-2 rounded-full`} onClick={scrollToTop}>
              <Link href="/time">
                <img className="" src="/time.svg" alt=""/>
              </Link>
            <Link href="/upgrade-hero">
              <img className="" src="/hero.svg" alt=""/>
            </Link>
            <Link href="/">
              <img className="" src="/home.svg" alt=""/>
            </Link>      
        </div>
        <Head>
            <title>Code by Lương Khoa</title>
        </Head>
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
  const [click,setClick] = useState(false)
  return (
    <div onClick={()=>setClick(!click)} className={`w-full ${click && "bg-indigo-600"} cursor-pointer flex font-bold justify-around text-[20px] last:border-none border-b-2`}>
      <span className="w-1/4 flex justify-center items-center">
      <img className="w-4 mr-2" src="/day.svg" alt=""/>
        {day}
        </span>
      <span className="w-1/4 flex justify-center items-center">{skip}
      <img className="w-4 ml-2" src="/skip.svg" alt=""/></span>
      <span className="w-1/4 flex justify-center items-center">{Math.floor(ticket)}
      <img className="w-4 ml-2" src="/ticket.svg" alt=""/>
      </span>
      <span className={`w-1/4 flex justify-center items-center ${click ? "text-white" : color(cost)}`}> <img className="w-4 mr-2" src="/cost.svg" alt=""/>{Math.floor(cost)}</span>
    </div>
  );
};
