import styled from "styled-components";
import { collection } from "@/data";
import { colors } from "@/styles/GlobalStyle";
import { BsPatchCheckFill } from "react-icons/bs";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";

const CollectionCard = () => {
  return (
    <Card>
      <h2 className="int-cf title">Top collections over</h2>
      <p className="dm-sans subtitle">Last 7 days</p>
      {collection.map((element, idx) => {
        return (
          <div className="art-box" key={"art-" + idx}>
            <div className="d-flex align-items-center">
              <h1 className="dm-sans">{idx + 1}</h1>
              <div className="art-img">
                {element.check ? <BsPatchCheckFill /> : null}
                <Image src={element.img} alt="art img" />
              </div>
              <div className="name-price">
                <h2 className="dm-sans">{element.name}</h2>
                <p className="poppins">
                  <FaEthereum /> {element.price}
                </p>
              </div>
            </div>
            <Percent rise={element.rise} className="percent poppins">
              {element.percent}
            </Percent>
          </div>
        );
      })}
    </Card>
  );
};

export default CollectionCard;

const Card = styled.div`
  .title {
    font-size: 20px;
  }
  .subtitle {
    font-size: 18px;
    color: ${colors.blue};
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .art-box {
    padding: 16px 0px;
    border-bottom: 1px solid ${colors.lightgray};
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-last-child(1) {
      border-bottom: none;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      margin-right: 20px;
    }
    .art-img {
      position: relative;
      svg {
        position: absolute;
        top: 0;
        right: 0;
        color: ${colors.royalBlue};
        font-size: 24px;
      }
    }
    .name-price {
      margin-left: 28px;
      h2 {
        font-size: 16px;
        font-weight: 500;
      }
      p {
        color: ${colors.textgray};
        font-size: 14px;
        display: flex;
        align-items: center;
        font-weight: 600;
        margin-top: 10px;
        svg {
          font-size: 20px;
          color: black;
          margin-right: 5px;
        }
      }
    }
  }
`;

const Percent = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => (props.rise ? colors.green : colors.red)};
`;
