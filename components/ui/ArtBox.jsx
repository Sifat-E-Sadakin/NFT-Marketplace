import styled from "styled-components";
import Image from "next/image";
import { colors, resFont } from "@/styles/GlobalStyle";
import { FaEthereum } from "react-icons/fa";
import { useEffect, useState } from "react";
import showCountdown from "@/utils/Countdown";

const ArtBox = (props) => {
  const { name, img, users, price, min, max, time } = props.artData;

  const [remain, setRemain] = useState({});
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemain(showCountdown(time));
    }, 1000);
    return () => clearInterval(timerInterval);
  });

  return (
    <Box>
      <div className="img-box">
        <Image src={img} alt="art box image" className="art-img" />
        <UserImgBox>
          {users.map((element, idx) => {
            return (
              <UserImg key={"art-user-" + idx} index={idx}>
                <Image
                  src={element}
                  alt="art-box-img"
                  key={"art-users-" + idx}
                />
              </UserImg>
            );
          })}
        </UserImgBox>
      </div>
      <h2 className="dm-sans">{name}</h2>
      <div className="price-range">
        <h3 className="dm-sans">
          <FaEthereum /> {price} ETH
        </h3>
        <p className="dm-sans">
          {min} of {max}
        </p>
      </div>
      <div className="time-bid">
        <p className="dm-sans">
          {remain.day}
          <span>d</span> {remain.hour}
          <span>h</span> {remain.minute}
          <span>m</span> {remain.second}
          <span>s</span> left
        </p>
        <button className="dm-sans">Place a bid</button>
      </div>
    </Box>
  );
};

export default ArtBox;

const Box = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border-radius: 20px;
  margin-top: 60px;
  .img-box {
    position: relative;
    .art-img {
      width: 100%;
      height: auto;
    }
  }
  h2 {
    margin-top: 30px;
    font-weight: 700;
    font-size: ${resFont(20, 24)};
  }
  .price-range {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    h3 {
      color: ${colors.green};
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 700;
      svg {
        font-size: 20px;
        position: relative;
        margin-right: 5px;
      }
    }
    p {
      color: ${colors.textgray};
      font-weight: 500;
    }
  }
  .time-bid {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    p {
      color: ${colors.blue};
      background-color: ${colors.lightgray};
      padding: 5px 20px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 14px;
      span {
        font-weight: 400;
      }
    }
    button {
      color: ${colors.blue};
      background-color: transparent;
      border: none;
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
    }
  }
`;

const UserImgBox = styled.div`
  position: absolute;
  bottom: -18px;
  left: 20px;
  width: 100%;
`;

const UserImg = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.index * 35}px;
  img {
    width: 50px;
    height: 50px;
  }
`;
