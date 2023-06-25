import React, { useRef, useState } from "react";
import { hero } from "./api/hero";
import { content } from "./api/content";
import { ticket } from "./api/ticket";
import Link from "next/link";
import Head from "next/head";

export default function Upgrade() {
    const [maxDay,setMaxDay] = useState(1000)
    const [isShow,setShow] = useState(false)
    const [check,setCheck] = useState(false)
    const [id,setId] = useState(0)

    const handleClick = (id) => {
        setId(id)
        setShow(true)
    }
    const [menu,setMenu] = useState(false)
  return (
    <>
      <Head>
            <title>Code by Lương Khoa</title>
        </Head>
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
      <div className="bg-black min-h-screen md:flex md:flex-col md:items-center md:justify-center lg:flex lg:flex-col lg:items-center lg:justify-center select-none text-white py-2 px-2 pb-24">
        <b>Common Heroes</b>
        <div className="flex gap-4 py-4 flex-wrap">
          <img onClick={() =>  handleClick(0)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/b/b6/Tristain_Portrait.png"
          />
          <img onClick={() =>  handleClick(1)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/1/1a/Hank_Potrait.png"
          />
          <img  onClick={() =>  handleClick(2)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/3/3c/Saul_Portrait.jpg"
          />
          <img onClick={() =>  handleClick(3)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/4/4c/Gwen_Potrait.png"
          />
          <img onClick={() =>  handleClick(4)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/a/a6/Job_Potrait.png"
          />
          <img onClick={() =>  handleClick(5)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/e/e9/Fred_Potrait.png"
          />
        </div>
        <b>Rare Heroes</b>
        <div className="flex gap-4 py-4 flex-wrap">
          <img   onClick={() =>  handleClick(6)}
            className="w-12 cursor-pointer  rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/8/8e/Cherry_Blossom_Portrait.jpg"
          />
          <img   onClick={() =>  handleClick(7)}
            className="w-12 cursor-pointer  rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/e/e8/Arthur_Potrait.png"
          />
          <img onClick={() =>  handleClick(8)}
            className="w-12 cursor-pointer  rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/3/38/Chandler_Potrait.png"
          />
          <img onClick={() =>  handleClick(9)}
            className="w-12 cursor-pointer  rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/5/59/Cusack_Potrait.png"
          />
          <img onClick={() =>  handleClick(10)}
            className="w-12 cursor-pointer  rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/e/e4/Greg_Potrait.png"
          />
          <img  onClick={() =>  handleClick(11)}
            className="w-12 cursor-pointer  rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/8/87/Pike_Potrait.png"
          />
        </div>
        <b>Epic Heroes</b>
        <div className="flex gap-4 py-4 flex-wrap">
          <img onClick={() =>  handleClick(12)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/7/7a/Zare_Potrait.png"
          />
          <img onClick={() =>  handleClick(13)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/a/a5/Max_Potrait.png"
          />
          <img onClick={() =>  handleClick(14)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/c/c3/Elaine_Potrait.png"
          />
          <img onClick={() =>  handleClick(15)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/d/d0/Eleanor_Potrait.png"
          />
          <img onClick={() =>  handleClick(16)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/8/8b/Esther_Potrait.png"
          />
          <img onClick={() =>  handleClick(17)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/a/ab/Garp_Potrait.png"
          />
          <img onClick={() =>  handleClick(18)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/1/13/Griflet_Portrait.jpg"
          />
        </div>
        <b>Legendary Heroes</b>
        <div className="flex gap-4 py-4 flex-wrap">
          <img onClick={() =>  handleClick(19)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/0/03/Merlin_Potrait.png"
          />
          <img  onClick={() =>  handleClick(20)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/f/fd/Lilith_Potrait.png"
          />
          <img onClick={() =>  handleClick(21)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/5/57/Dewitt_Potrait.png"
          />
          <img onClick={() =>  handleClick(22)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/3/34/Dash_Potrait.png"
          />
          <img onClick={() =>  handleClick(23)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/6/66/DarkMerlin_Potrait.png"
          />
          <img onClick={() =>  handleClick(24)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/f/f9/Lilibeth_Potrait.png"
          />
          <img onClick={() =>  handleClick(25)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/5/58/Elden_Potrait.png"
          />

          <img onClick={() =>  handleClick(26)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/6/64/Clarissa_Potrait.png"
          />
          <img onClick={() =>  handleClick(27)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/9/9b/KingArthur_Potrait.png"
          />
          <img onClick={() =>  handleClick(28)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/8/83/Luna_Potrait.png"
          />
          <img onClick={() =>  handleClick(29)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/e/ea/Mikhail_Potrait.png"
          />
          <img onClick={() =>  handleClick(30)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/8/8a/Cain_Potrait.png"
          />
          <img onClick={() =>  handleClick(31)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/b/bd/Roland_Potrait.png"
          />
          <img onClick={() =>  handleClick(32)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/1/1d/Nero_Portrait.png"
          />
        </div>
        <b>World Heroes</b>
        <div className="flex gap-4 py-4 flex-wrap">
          <img onClick={() =>  handleClick(33)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/7/71/Titor_Potrait.png"
          />
          <img onClick={() =>  handleClick(34)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/2/24/Harrow_Portrait.jpg"
          />
          <img onClick={() =>  handleClick(35)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/7/79/Percival_Portrait.jpg"
          />
          <img onClick={() =>  handleClick(36)}
            className="w-12 cursor-pointer rounded-lg"
            src="https://static.wikia.nocookie.net/days-bygone-wiki/images/f/f5/Ophelia_Portrait.png"
          />
        </div>
      </div>

      {
        isShow && <div className="fixed overflow-y-scroll top-0 left-0 right-0 p-2 bottom-0 bg-white">
        <div className="flex justify-between py-4 items-center">
          <b className="text-[20px]">Info Hero</b>
          <span onClick={()=> setShow(!isShow)} className="cursor-pointer">
            <img className="w-8 h-8" src="/close.svg" alt="" />
          </span>
        </div>
        <div className="flex gap-4">
          <img className="w-24 h-24" src={hero[id].avatar} alt="" />
          <div className="flex flex-col">
            <h1 className="text-[18px]">
              Name: <b>{hero[id].name}</b>
            </h1>
            <div className="flex flex-col gap-2  mt-4">
              {hero[id].skill.map((item) => (
                <div key={item.title} className="flex gap-2">
                  <img
                    className="w-12 h-12 rounded-lg"
                    src={item.img}
                    alt={item.text}
                  />
                  <p className="text-start text-[12px]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <b>Enter your max day:</b>
          <input
            className="border-2 border-black px-2 ml-2 rounded-lg"
            type="number"
            value={maxDay}
            onChange={(e)=> setMaxDay(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4">
            <b className="cursor-pointer" title="Assumes you will convert all catalysts into the ones required. Not recommended due to the 6:1 ratio.">Transmute: ?</b>
            <input
            type="checkbox"
            onChange={()=>setCheck(!check)}
          />
        </div>
        <div className="mt-4 pb-20">
          <div className="flex bg-sky-400  font-semibold text-white  text-center text-[13px] rounded-t-lg justify-evenly py-2">
            <span  className="w-[10%]">Stars</span>
            <span className="w-[20%]">Ticket</span>
            <span className="w-[30%]">Cumulative Cost</span>
            <span className="w-[20%]">Skills</span>
            <span className="w-[20%]">Hours Farming</span>
          </div>
        <div className="">
              {content[hero[id].content].map((item, index) => 
                { 
                    return (
                        <div className="flex text-white font-semibold border-b bg-slate-700 text-[13px] text-center justify-around py-2">
                  <span  className="w-[10%]">{20 -  index}</span>
                  {hero[id].ticket ==="c" && <span  className="w-[20%]">{ticket.c[index]}</span>}
                  {hero[id].ticket ==="r" && <span  className="w-[20%]">{ticket.r[index]}</span>}
                  {hero[id].ticket ==="e" && <span  className="w-[20%]">{ticket.e[index]}</span>}
                  {hero[id].ticket ==="l" && <span  className="w-[20%]">{ticket.l[index]}</span>}
                  <div  className="w-[30%]">{item.cumulative_cost} <span>{index%2 === 0 ? hero[id].item[0]:  hero[id].item[1]}</span></div>
                  <span  className="w-[20%]">{item.cumulative_skills}</span>
                  {check? <span  className="w-[20%]">{Math.ceil(((item.cumulative_cost  + item.cumulative_skills)/2*8*10000)/(maxDay)/60)*2}</span>:<span  className="w-[20%]">{Math.ceil(((item.cumulative_cost  + item.cumulative_skills)/2*8*10000)/(maxDay)/60)}</span>}
                </div>
                    )
                }
              )}
        </div>
        </div>
      </div>
      }
    </>
  );
}
