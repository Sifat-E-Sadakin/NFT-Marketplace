import styled from "styled-components";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState } from "react";
import { resFont } from "@/styles/GlobalStyle";
import showCountdown from "@/utils/Countdown";

const HeroCounter = () => {
  const [remain, setRemain] = useState({});
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemain(showCountdown("04/20/2023"));
    }, 1000);

    return () => clearInterval(timerInterval);
  });
  return (
    <Counter>
      <div className="bid">
        <p className="dm-sans">Current Bid</p>
        <h1 className="dm-sans">
          <FaEthereum /> 0.25 ETH
        </h1>
      </div>
      <div className="end">
        <p className="dm-sans">Ends In</p>
        <h2>
          {/* A negative value of the day will not be shown here */}
          {remain.day > 0 ? (
            <span>
              <b>{remain.day}</b>d
            </span>
          ) : null}
          <span>
            <b>{remain.hour}</b>h
          </span>
          <span>
            <b>{remain.minute}</b>m
          </span>
          <span>
            <b>{remain.second}</b>s
          </span>
        </h2>
      </div>
    </Counter>
  );
};

export default HeroCounter;

const Counter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    color: white;
    font-weight: 700;
  }
  h1 {
    color: white;
    font-size: ${resFont(16, 24)};
    font-weight: 700;
    margin-top: 5px;
  }
  h2 {
    display: flex;
    align-items: center;
    color: white;
    font-size: ${resFont(16, 24)};
    font-weight: 400;
    margin-top: 5px;
    svg {
      margin-right: 10px;
    }
    span {
      display: block;
      margin-left: 10px;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: flex-start;
    .end {
      margin-top: 20px;
    }
  }
`;
