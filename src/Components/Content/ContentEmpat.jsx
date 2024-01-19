import React, { useState, useEffect, useRef, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";
const ContentEmpat = () => {
  const [email, setEmail] = useState();
  const [words, setWords] = useState({
    words1: [" Wibu", " Menjadi", " Kuat"],
    words2: "Selesai",
  });

  const [done, setDone] = useState(false)

  const completed = () => {
    setDone(true)
    setWords({...words, 
    words1: ['']})
  };

  const [number, setNumber] = useState();
  const varUseRef = useRef();

  useEffect(() => {
    console.log(varUseRef.current.value);
  }, [email]);

  const addNumber = useCallback(() => {
    setNumber([number, number + 1, number + 1]);
  }, [number]);

  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  const Focus = () => {
    varUseRef.current.focus();
  };

  const removeValue = (e) => {
    setEmail((e.target.value = ""));
  };

  function timeLeft() {
    const HariEsok = new Date("January 19, 2024 00:00:00").getTime();
    const HariIni = new Date().getTime();
    const TimeRemain = HariEsok - HariIni;
    return TimeRemain;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <input ref={varUseRef} type="text" name="inpText" onChange={onInputChange} value={email} />
        </div>
        <div className="row">
          <button onClick={() => addNumber()}>Tambahkan angka</button>
        </div>
        <div className="row">
          <button onClick={Focus}>Focus</button>
          <button onClick={removeValue}>Hapus</button>
        </div>
        <div className="row">
          <p>{email}</p>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <p>Your number is {number}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Typewriter words={words.words1} loop={false} cursorStyle={"_"} cursor typeSpeed={50} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Countdown date={Date.now() + timeLeft()} onComplete={() => completed()} />
          </div>
        </div>
        {
          done && <div>
            <p>Selesai</p>
          </div>
        }
      </div>
    </>
  );
};
export default ContentEmpat;
