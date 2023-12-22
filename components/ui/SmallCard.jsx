import { FaEthereum } from "react-icons/fa";
import styled from "styled-components";
import BlueButtonOutline from "./BlueButtonOutline";
import Image from "next/image";
import { colors, resFont } from "@/styles/GlobalStyle";
import { smallArtData } from "@/data";

const SmallCard = () => {
  return smallArtData.map((element, idx) => {
    return (
      <Card key={"smallcard-" + idx}>
        <Image src={element.art_img} alt="card-img" className="card-image" />
        <div className="card-box">
          <h2 className="dm-sans">{element.title}</h2>
          <div className="user">
            <Image src={element.user_img} alt="user img" />
            <div className="label">
              <FaEthereum />
              <p className="dm-sans">{element.eth} ETH</p>
            </div>
            <p className="dm-sans">
              {element.min} of {element.max}
            </p>
          </div>
          <BlueButtonOutline
            text="Place a bid"
            fontFamily="averta"
            fontSize="16"
          />
        </div>
      </Card>
    );
  });
};

export default SmallCard;

const Card = styled.div`
  display: flex;
  margin-top: 30px;
  &:nth-child(1) {
    margin-top: 0;
  }
  .card-image {
    margin-right: 20px;
    width: 90px;
    height: 90px;
    @media screen and (min-width: 430px) {
      width: 150px;
      height: 150px;
    }
  }
  h2 {
    font-size: ${resFont(18, 20)};
    font-weight: 700;
  }
  .user {
    display: flex;
    align-items: center;
    margin: 15px 0px;
    img {
      height: 40px;
      width: 40px;
    }
    .label {
      display: flex;
      align-items: center;
      border: 2px solid ${colors.green};
      border-radius: 5px;
      padding: 8px;
      margin: 0px 10px;
      p {
        font-weight: 700;
        color: ${colors.green};
      }
      svg {
        color: ${colors.green};
      }
    }
    p {
      color: ${colors.textgray};
    }
  }
  button {
    height: 45px;
  }
`;
