import styled from "styled-components";
import Img4 from "@/public/img4.png";
import Image from "next/image";
import User1 from "@/public/user1.png";
import { FaEthereum } from "react-icons/fa";
import { resFont } from "@/styles/GlobalStyle";

const BigCard = () => {
  return (
    <Card>
      <Image src={Img4} alt="card img" className="art-img" />
      <div className="card-content">
        <div className="user">
          <Image src={User1} alt="user image" />
          <div>
            <h2 className="dm-sans">The Futr Abstr</h2>
            <p className="dm-sans">10 in the stock</p>
          </div>
        </div>
        <div className="bid">
          <p className="dm-sans">Highest Bid</p>
          <div>
            <FaEthereum />
            <h2 className="dm-sans">0.25 ETH</h2>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BigCard;

const Card = styled.div`
  .art-img {
    width: 100%;
    height: auto;
  }
  .card-content {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .user {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
        height: 48px;
        width: 48px;
      }
      h2 {
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  .bid {
    p {
      font-weight: 500;
      font-size: ${resFont(12, 14)};
    }
    div {
      display: flex;
      align-items: center;
      margin-top: 5px;
      svg {
        margin-right: 10px;
        font-size: 18px;
      }
      h2 {
        font-size: ${resFont(16, 20)};
        font-weight: 700;
      }
    }
  }
`;
