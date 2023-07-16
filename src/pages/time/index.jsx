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
        <Head>
            <title>Cody by Lương Khoa</title>
            <meta name="description" content="Mọi người xem tham khảo thôi nha." />
            <meta property="og:title" content="Cody by Lương Khoa" key="title" />
            <meta property="og:description" content="Mọi người xem tham khảo thôi nha." key="description" />
            <meta property="og:image" content="https://luongkhoa.io.vn/aaa.jpg" key="image" />
            <meta property="og:url" content="https://check-rewind.vercel.app/" key="url" />
            <link rel="icon" href="/images/favicon.ico" />

            <meta name="twitter:title" content="Cody by Lương Khoa" />
            <meta name="twitter:description" content="Mọi người xem tham khảo thôi nha." />
            <meta name="twitter:image" content="https://luongkhoa.io.vn/aaa.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
      <div className="flex z-10 flex-wrap gap-2 justify-center px-4 border-b-2 pb-4">
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
