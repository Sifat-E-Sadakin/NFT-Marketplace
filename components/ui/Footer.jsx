import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import fb from "@/public/fb.png";
import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import Link from "next/link";
import { colors, resFont } from "@/styles/GlobalStyle";
import BlueButton from "@/components/ui/BlueButton";

const Footer = () => {
  return (
    <FooterWrapper className="custom-container">
      <Row>
        <Col xl="4">
          <div className="footer-box">
            <Link href="/">
              <h1 className="int-cf">NFTERS</h1>
            </Link>
            <p className="averta">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div className="social">
              <a href="#" target="_blank">
                <Image src={fb} alt="FB Icon" />
              </a>
              <a href="#" target="_blank">
                <Image src={twitter} alt="FB Icon" />
              </a>
              <a href="#" target="_blank">
                <Image src={linkedin} alt="FB Icon" />
              </a>
            </div>
          </div>
        </Col>
        <Col xl="2" sm="6">
          <div className="footer-box">
            <h2 className="dm-sans">Market Place</h2>
            <ul className="footer-list dm-sans">
              <li>
                <Link href="/">All NFT's</Link>
              </li>
              <li>
                <Link href="/">New</Link>
              </li>
              <li>
                <Link href="/">Art</Link>
              </li>
              <li>
                <Link href="/">Sports</Link>
              </li>
              <li>
                <Link href="/">Utility</Link>
              </li>
              <li>
                <Link href="/">Music</Link>
              </li>
              <li>
                <Link href="/">Domain Name</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl="2" sm="6">
          <div className="footer-box">
            <h2 className="dm-sans">My Account</h2>
            <ul className="footer-list dm-sans">
              <li>
                <Link href="/">Profile</Link>
              </li>
              <li>
                <Link href="/">Favorite</Link>
              </li>
              <li>
                <Link href="/">My Collections</Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xl="4">
          <div className="footer-box">
            <h2 className="dm-sans">Stay In The Loop</h2>
            <p className="dm-sans mail-text">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="email-box">
              <input
                type="text"
                placeholder="Enter your email address"
                className="dm-sans"
              />
              <BlueButton
                text="Subscribe Now"
                fontSize="18"
                fontFamily="dm-sans"
              />
            </div>
          </div>
        </Col>
      </Row>
      <p className="copy averta">Copyright © 2022 Avi Yansah</p>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding-top: 40px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
  .footer-box {
    margin-top: 40px;
  }
  h1 {
    font-size: ${resFont(24, 28)};
  }
  h2 {
    font-size: ${resFont(20, 22)};
    font-weight: 700;
  }
  p {
    margin-top: 30px;
    color: ${colors.textgray};
    max-width: 380px;
  }
  .mail-text {
    color: ${colors.black};
    max-width: 100%;
  }
  .copy {
    margin-top: 80px;
    max-width: 100%;
    width: 100%;
    text-align: center;
    padding: 20px 0px;
    border-top: 1px solid ${colors.lightgray};
    color: ${colors.textgray};
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
  }
  .social {
    margin-top: 30px;
    display: flex;
    img {
      margin-right: 16px;
    }
  }
  .footer-list {
    margin-top: 35px;
    li {
      margin-top: 10px;
      a {
        color: ${colors.black};
        font-weight: 500;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }
  .email-box {
    border: 2px solid ${colors.lightgray};
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 60px;
    margin-top: 30px;
    input {
      width: 100%;
      flex: 1;
      border: none;
      padding: 0px 20px;
      &:focus {
        outline: none;
      }
    }
    button {
      white-space: nowrap;
      padding: 10px 30px;
    }
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      border: none;
      input {
        border: 2px solid ${colors.lightgray};
        height: 50px;
        flex: auto;
        border-radius: 30px;
      }
      button {
        margin-top: 20px;
      }
    }
  }
`;
