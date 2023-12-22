import { colors, resFont } from "@/styles/GlobalStyle";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import searchIcon from "@/public/search-icon.png";
import BlueButton from "./BlueButton";
import BlueButtonOutline from "./BlueButtonOutline";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header className="custom-container" menuOpen={menuOpen}>
      <div className="logo">
        <Link className="int-cf" href="/">
          Nfters
        </Link>
      </div>
      <nav>
        <div className="nav-left">
          <ul className="menu-list dm-sans">
            <li>
              <Link href="/">Marketplace</Link>
            </li>
            <li>
              <Link href="/">Resource</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="search-box dm-sans">
            <input type="text" placeholder="Search" />
            <Image src={searchIcon} alt="search icon" className="search-icon" />
          </div>
          <BlueButton text="Upload" fontFamily="dm-sans" fontSize="16" />
          <BlueButtonOutline
            text="Connect Wallet"
            fontFamily="dm-sans"
            fontSize="16"
          />
        </div>
      </nav>
      <div className="toggle" onClick={handleMenu}>
        <AiOutlineMenu />
      </div>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.lightgray};
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;
  .logo {
    margin-top: -4px;
    a {
      font-size: ${resFont(20, 32)};
      color: ${colors.blue};
    }
  }
  nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-left {
    .menu-list {
      height: 50px;
      display: flex;
      align-items: center;
      margin-left: 30px;
      border-left: 1px solid ${colors.lightgray};
      li {
        margin-left: 30px;
        a {
          font-size: ${resFont(16, 18)};
          font-weight: 500;
          color: black;
          transition: 0.3s;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
  .nav-right {
    display: flex;
    align-items: center;
    .search-box {
      height: 50px;
      width: 300px;
      position: relative;
      input {
        height: 100%;
        width: 100%;
        border: 2px solid ${colors.lightgray};
        border-radius: 100px;
        padding-left: 20px;
        padding-right: 50px;
      }
      .search-icon {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          transform: translateY(-50%) scale(1.1);
        }
      }
    }
    button {
      margin-left: 20px;
    }
  }
  .toggle {
    display: none;
    cursor: pointer;
    svg {
      color: black;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    nav {
      height: calc(100vh - 100px);
      width: 100%;
      position: fixed;
      top: 100px;
      right: ${(props) => (props.menuOpen ? "0%" : "-100%")};
      background-color: white;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 50px;
      transition: 0.5s;
      z-index: 999;
    }
    .nav-left {
      .menu-list {
        padding: 0;
        margin: 0;
        border-left: none;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        li {
          margin-left: 0;
          margin-bottom: 30px;
        }
      }
    }
    .nav-right {
      flex-direction: column;
      align-items: flex-start;
      button {
        margin-top: 30px;
        margin-left: 0;
      }
    }
    .toggle {
      display: block;
    }
  }
`;
