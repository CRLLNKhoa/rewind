import React, { useState } from "react";
import { time } from "../api/time";
import Head from "next/head";
import Link from "next/link";
export default function Time() {
    const [num,setNum]=useState({
        from: 9999,
        to: 9990
    })
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const [menu,setMenu] = useState(false)
  return (
    <div className="flex flex-col justify-between w-full items-center pt-8 bg-black">
       <div className="fixed cursor-pointer z-20 text-white bottom-[16px] left-[8px] px-4 py-2 rounded-full" onClick={()=>setMenu(!menu)}>
            <img className="w-12" src="/new.svg" alt=""/>
        </div>
        <Link target="_blank" href="https://www.facebook.com/lnkhoa1205" className={`fixed cursor-pointer z-20 text-white ${menu?"bottom-[12px]":"-bottom-[80px]"} transition-all duration-500 left-[80px] px-4 py-2 rounded-full`}>
            <img className="w-12" src="/fb.svg" alt=""/>
        </Link>
        <div className={`fixed text-white flex flex-col gap-6 bg-white h-[200px] w-14 z-10 ${menu?"bottom-[20px]":"-bottom-[200px]"} transition-all duration-500 left-[20px] px-4 py-2 rounded-full`}>
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
      <div className="flex flex-wrap gap-2 justify-center px-4 border-b-2 pb-4">
        <span onClick={()=>setNum({ from: 0,
        to: 74})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          1000-1500
        </span>
        <span onClick={()=>setNum({ from: 75,
        to: 135})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          1500-2000
        </span>
        <span onClick={()=>setNum({ from: 136,
        to: 159})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          2000-3000
        </span>
        <span onClick={()=>setNum({ from: 160,
        to: 228})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          3000-5000
        </span>
        <span onClick={()=>setNum({ from: 229,
        to: 280})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          5000-8000
        </span>
        <span onClick={()=>setNum({ from: 281,
        to: 317})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          8000-10000
        </span>
        <span onClick={()=>setNum({ from: 318,
        to: 369})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          10000-11600
        </span>
        <span onClick={()=>setNum({ from: 370,
        to: 9000})} className="bg-sky-500 px-2 py-1 rounded-full text-white hover:bg-red-600 cursor-pointer">
          11600-end
        </span>
      </div>
      <div>
        <h1 className="text-white text-center px-2 py-2">Số liệu do các người chơi  cung cấp  cho nên không đầy đủ và có chênh lệch</h1>
      </div>
      <div className="flex text-white flex-wrap flex-col min-h-screen justify-center py-4 px-12 gap-2">
        {time.map((item, index) => {
          if (index >= num.from && index <= num.to) {
            return(
                <div className="text-white flex gap-2 justify-between odd:bg-red-600 even:bg-sky-600 px-2 py-2">
              <span>
                Day: <b className="text-black">{item.Day}</b>
              </span>
              <span>
                Thời gian trung bình:{" "}
                <b className="text-lime-300">{item.Time}</b>
              </span>
            </div>
            )
          }
        })}
      </div>
      <button className="fixed text-white bottom-[20px] right-[20px] px-4 py-2 rounded-full" onClick={scrollToTop}>
      <img src="/top.svg" alt=""/>
        </button>
    </div>
  );
}
