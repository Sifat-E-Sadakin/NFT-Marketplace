import { resFont } from "@/styles/GlobalStyle";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import BlueButton from "@/components/ui/BlueButton";
import Count from "@/components/ui/Count";
import Image from "next/image";
import Img1 from "@/public/img1.png";
import Img2 from "@/public/img2.png";
import Img3 from "@/public/img3.png";
import user from "@/public/user.png";
import CircleImg from "@/public/hero-circle.png";
import HeroCounter from "@/components/ui/HeroCounter";

const Hero = () => {
  return (
    <section className="custom-container">
      <Row>
        <Col lg={7}>
          <HeroText>
            <h1 className="int-cf">Discover, and collect Digital Art NFTs</h1>
            <p className="common-text">
              Digital marketplace for crypto collectibles and non-fungible
              tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
            </p>
            <BlueButton text="Explore Now" fontSize="20" fontFamily="averta" />
            <Count />
          </HeroText>
        </Col>
        <Col lg={5} md={8}>
          <HeroImg>
            <div className="img-box">
              <div className="single-img">
                <Image
                  src={Img1}
                  className="img1"
                  alt="hero image 1"
                  priority={true}
                />
                <div className="img-top">
                  <h2 className="dm-sans">Abstr Gradient NFT</h2>
                  <div className="user">
                    <Image src={user} alt="hero user image" priority={true} />
                    <h3 className="dm-sans">Arkhan17</h3>
                  </div>
                </div>
                <div className="img-bottom">
                  <HeroCounter />
                </div>
              </div>
              <Image
                src={Img2}
                className="img2"
                alt="hero image 2"
                priority={true}
              />
              <Image
                src={Img3}
                className="img3"
                alt="hero image 3"
                priority={true}
              />
            </div>
            <div className="circle-img d-none d-xl-block">
              <Image src={CircleImg} alt="Circle Img" priority={true} />
            </div>
          </HeroImg>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  h1 {
    font-size: ${resFont(32, 48)};
    max-width: 700px;
  }
  p {
    margin-top: 30px;
    max-width: 470px;
  }
  button {
    height: 60px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const HeroImg = styled.div`
  position: relative;
  .circle-img {
    position: absolute;
    top: 60%;
    left: -69px;
    animation-name: rotate;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes rotate {
      0% {
        transform: translateY(-60%) rotate(0deg);
      }
      100% {
        transform: translateY(-60%) rotate(360deg);
      }
    }
  }
  .img-box {
    width: 80%;
    position: relative;
    .single-img {
      position: relative;
      .img-top {
        position: absolute;
        top: 30px;
        left: 30px;
        h2 {
          font-weight: 700;
          color: white;
          font-size: ${resFont(20, 32)};
        }
        .user {
          margin-top: 15px;
          display: flex;
          align-items: center;
          img {
            width: 34px;
            height: 34px;
          }
          h3 {
            color: white;
            font-weight: 700;
            font-size: ${resFont(16, 24)};
            margin-left: 15px;
          }
        }
      }
      .img-bottom {
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 30px;
      }
    }
    .img1 {
      width: 100%;
      height: auto;
    }
    .img2,
    .img3 {
      height: 90%;
      width: auto;
      position: absolute;
      top: 50%;
      right: -10%;
      transform: translateY(-50%);
      z-index: -1;
    }
    .img3 {
      height: 80%;
      right: -20%;
      z-index: -2;
    }
    @media screen and (max-width: 992px) {
      margin-top: 30px;
    }
  }
`;
