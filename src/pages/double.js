import React, { useState } from "react";
import { data } from "./api/double";
import Head from "next/head";
import Link from "next/link";

function Double() {
  const [days, setDays] = useState({
    to: 0,
    from: 0,
  });
  const [toNum, setTo] = useState(0);

  const [fromNum, setFrom] = useState(1000);

  const [isLoading, setIsLoading] = useState(false);

  const [tab, setTab] = useState(1);

  const [menu, setMenu] = useState(false);

  const handle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTo(days.to);
      setFrom(days.from);
    }, 300);
    setIsLoading(false);
  };

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="flex justify-center items-center bg-slate-950 w-fulll min-h-screen pb-[100px]">
      <Head>
        <title>Cody by Lương Khoa</title>
        <meta name="description" content="Mọi người xem tham khảo thôi nha." />
        <meta property="og:title" content="Cody by Lương Khoa" key="title" />
        <meta
          property="og:description"
          content="Mọi người xem tham khảo thôi nha."
          key="description"
        />
        <meta
          property="og:image"
          content="https://luongkhoa.io.vn/aaa.jpg"
          key="image"
        />
        <meta
          property="og:url"
          content="https://check-rewind.vercel.app/"
          key="url"
        />
        <link rel="icon" href="/images/favicon.ico" />

        <meta name="twitter:title" content="Cody by Lương Khoa" />
        <meta
          name="twitter:description"
          content="Mọi người xem tham khảo thôi nha."
        />
        <meta name="twitter:image" content="https://luongkhoa.io.vn/aaa.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="z-10 w-full lg:w-[80%] min-h-[80%] p-4 text-white flex justify-center items-center flex-col">
        <b className="text-[24px] font-bold">Quick Double Rewind </b>
        <p className="pb-2">The lower the cost, the faster the rewind time</p>
        <div className="flex font-bold flex-wrap items-center lg:flex-row gap-4 text-black bg-white rounded-lg">
          <div className="flex w-full lg:flex-1 items-center lg:pt-0 justify-between pt-4">
            <input
              className="bg-transparent w-1/3 text-center outline-none p-2 rounded-lg"
              type="number"
              placeholder="From"
              onChange={(e) => setDays({ ...days, to: e.target.value })}
            />
            <img className="w-12 h-8" src="/right.svg" alt="" />
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
              <span className="w-1/4 flex justify-center items-center">
                Max day
              </span>
              <span className="w-1/4 flex justify-center items-center">
                Skip day
              </span>
              <span className="w-1/4 flex justify-center items-center">
                Tickets
              </span>
              <span className="w-1/4 flex justify-center items-center">
                Cost
              </span>
            </div>
            {data
              .filter(
                (filtered) =>
                  toNum <= filtered.maxDay && filtered.maxDay <= fromNum
              )
              .map((item) => (
                <Item
                  key={item.maxDay}
                  day={item.maxDay}
                  skip={item.skip}
                  ticket={item.tickets}
                  cost={item.cost}
                />
              ))}
          </div>
        )}
      </div>
      <button
        className="fixed text-white z-30 bottom-[20px] right-[20px] px-4 py-2 rounded-full"
        onClick={scrollToTop}
      >
        <img className="w-12" src="/top.svg" alt="" />
      </button>
      <div
        className="fixed bg-red-600 font-bold cursor-pointer z-30 text-white bottom-[30px] left-[40px] px-4 py-2 rounded-full"
        onClick={() => setMenu(!menu)}
      >
        New
      </div>
      <Link
        target="_blank"
        href="https://www.facebook.com/lnkhoa1205"
        className={`fixed cursor-pointer z-30 text-white bottom-[12px]
        } transition-all duration-500 left-[80px] px-4 py-2 rounded-full`}
      >
        
      </Link>
      <div onClick={()=>!setMenu(!menu)} className={`fixed ${menu ? "opacity-100 z-20" : "opacity-0 z-0"} duration-500 top-0 bottom-0 left-0 right-0 bg-black`}> </div>
      <div
        className={`fixed text-white flex flex-col gap-6  h-[200px] z-30 ${
          menu ? "left-[10px]" : "-left-[500px]"
        } transition-all duration-500 bottom-[160px] px-4 py-2 rounded-full`}
        onClick={scrollToTop}
      >
        <a target="_blank" className="bg-green-600 font-bold px-2 py-1 text-white rounded-full flex items-center justify-center" href="https://luongkhoa.io.vn/">Author</a>
        <Link
          className="bg-white font-bold px-2 py-1 text-black rounded-full flex items-center justify-center"
          href="/time"
        >
          Time Rewind
        </Link>
        <Link className="bg-white font-bold px-2 py-1 text-black rounded-full flex items-center justify-center line-through" href="/upgrade-hero">Upgrade-Hero</Link>
        <Link className="bg-white font-bold px-2 py-1 text-black rounded-full flex items-center justify-center" href="/double">Quick Double Rewind</Link>
        <Link className="bg-white font-bold px-2 py-1 text-black rounded-full flex items-center justify-center" href="/">Quick Rewind</Link>
      </div>
    </div>
  );
}

export const Item = ({ day = 0, skip = 0, ticket = 0, cost = 0 }) => {
  const color = (cost) => {
    if (cost > 200 && cost < 300) {
      return "text-lime-400";
    }
    if (cost < 400 && cost >= 300) {
      return "text-lime-500";
    }
    if (cost < 450 && cost >= 400) {
      return "text-lime-600";
    }
    if (cost < 500 && cost >= 450) {
      return "text-red-700";
    }
    if (cost < 550 && cost >= 500) {
      return "text-red-800";
    }
    if (cost < 600 && cost >= 550) {
      return "text-red-900";
    }
    if (cost < 700 && cost >= 600) {
      return "text-red-900";
    }
  };
  const [click, setClick] = useState(false);
  return (
    <div
      onClick={() => setClick(!click)}
      className={`w-full ${
        click && "bg-indigo-600"
      } cursor-pointer flex font-bold justify-around text-[20px] last:border-none border-b-2`}
    >
      <span className="w-1/4 flex justify-center items-center">
        <img className="w-4 mr-2" src="/day.svg" alt="" />
        {day}
      </span>
      <span className="w-1/4 flex justify-center items-center">
        {skip}
        <img className="w-4 ml-2" src="/skip.svg" alt="" />
      </span>
      <span className="w-1/4 flex justify-center items-center">
        {Math.floor(ticket)}
        <img className="w-4 ml-2" src="/ticket.svg" alt="" />
      </span>
      <span
        className={`w-1/4 flex justify-center items-center ${
          click ? "text-white" : color(cost)
        }`}
      >
        {" "}
        <img className="w-4 mr-2" src="/cost.svg" alt="" />
        {Math.floor(cost)}
      </span>
    </div>
  );
};

export default Double;
