import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import img1 from "@/public/img1.png";
import user1 from "@/public/user1.png";
import user2 from "@/public/user2.png";
import Image from "next/image";
import BlueButton from "../ui/BlueButton";
import { resFont, colors } from "@/styles/GlobalStyle";

const CtaSec = () => {
  return (
    <Cta className="custom-container">
      <Row>
        <Col lg="6">
          <div className="cta-img">
            <div className="img-col">
              <div className="img-box">
                <Image src={img1} alt="cta img" className="main-img" />
                <Image src={user1} alt="cta user img" className="user-img" />
              </div>
              <div className="img-box img-box2">
                <Image src={img1} alt="cta img" className="main-img" />
                <Image src={user2} alt="cta user img" className="user-img" />
              </div>
            </div>
            <div className="img-box img-box3">
              <Image src={img1} alt="cta img" className="main-img" />
              <Image src={user1} alt="cta user img" className="user-img" />
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="cta-content">
            <h2 className="int-cf">Create and sell your NFTs</h2>
            <p className="dm-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
              ac phasellus placerat a pellentesque tellus sed egestas. Et
              tristique dictum sit tristique sed non. Lacinia lorem id
              consectetur pretium diam ut. Pellentesque eu sit blandit fringilla
              risus faucibus.
            </p>
            <BlueButton text="Sign Up Now" fontSize="20" fontStyle="averta" />
          </div>
        </Col>
      </Row>
    </Cta>
  );
};

export default CtaSec;

const Cta = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  overflow-x: hidden;
  .cta-img {
    display: flex;
    align-items: center;
    width: 100%;
    .img-col {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .img-box {
      position: relative;
      width: 100%;
      .main-img {
        width: 100%;
        height: auto;
      }
      .user-img {
        position: absolute;
        bottom: -40px;
        right: -40px;
        @media screen and (max-width: 576px) {
          width: 50px;
          height: 50px;
          bottom: -25px;
          right: -25px;
        }
      }
    }
    .img-box2 {
      width: 60%;
      height: auto;
      margin-top: 50px;
    }
    .img-box3 {
      width: 45%;
      height: auto;
      padding-left: 10%;
    }
  }
  .cta-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    @media screen and (max-width: 992px) {
      margin-top: 40px;
    }
    h2 {
      font-size: ${resFont(28, 32)};
      max-width: 300px;
    }
    p {
      margin-top: 30px;
      font-size: ${resFont(16, 18)};
      color: ${colors.textgray};
    }
    button {
      margin-top: 30px;
      height: 60px;
    }
  }
`;
