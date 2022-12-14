import React, { useState } from 'react'
import './style.css'
import { LunarDate } from 'vietnamese-lunar-calendar';

export default function CountDown() {
  const [time , setTime]= useState({
    day: 10 ,
    hour:20 ,
    minute:30,
    second:20
  })

  const LunaDate = new LunarDate().getDate().toLocaleString();
  const LunaMonth = new LunarDate().getMonth().toLocaleString();
  const LunaYear = new LunarDate().getYear();

  const toDay = new Date();

  function startTime() {
    setInterval(timeShow , 1000);
  }

  function timeShow() {
    let Lunar = (new Date('2023-01-22').getTime())/1000;
    let Now = Math.floor((new Date().getTime())/1000);
    let countDown = Lunar - Now - 25200;
    let day = Math.floor(countDown/86400);
    let hour = Math.floor((countDown%86400)/3600);
    let minute = Math.floor(((countDown%86400)%3600)/60);
    let second = ((countDown%86400)%3600%60)
    setTime({day,hour,minute,second})
  }
  
  startTime() ;
  return (
    <>
      <div className="title-new-year">
       <p>Happy new year 2023 </p>
      </div>
      <div className="count-down">
        <div className="time-box">
            <div className='time-show'>{ time.day.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) } </div>
            <div className="text-show">Day</div>
        </div>
        <div className="time-box">
            <div className='time-show'>{ time.hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) } </div>
            <div className="text-show">Hour</div>
        </div>
        <div className="time-box">
            <div className='time-show'>{ time.minute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) } </div>
            <div className="text-show">Minute</div>
        </div>
        <div className="time-box">
            <div className='time-show'>{ time.second.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) } </div>
            <div className="text-show">second</div>
        </div>
      </div>
      <div className="footer-new-year">
          <div className="date-current">
            <div className="text-date">
              Dương Lịch
            </div>
            <div className="time-date">
              {toDay.getDate()}/{toDay.getMonth()+1}/{toDay.getFullYear()}
            </div>
          </div>
          <div className='line'></div>
          <div className="date-current">
            <div className="text-date">
              Âm Lịch
            </div>
            <div className="time-date">
              {LunaDate}/{LunaMonth}/{LunaYear}
            </div>
          </div>
      </div>
    </>
  )
}
