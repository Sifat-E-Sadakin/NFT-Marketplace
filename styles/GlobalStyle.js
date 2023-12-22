import { createGlobalStyle } from "styled-components";
import { DM_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";

// Font Integration

const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const integralCF = localFont({
  src: "../assets/Integral-CF-Bold.woff2",
});
const averta = localFont({ src: "../assets/AvertaDemoPE-Regular.woff" });

//Mixins

export const resFont = (min, max) => {
  return `calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1920 - 360)))`;
};

// Variables

export const colors = {
  blue: "#3D00B7",
  royalBlue: "#1E93FF",
  lightgray: "#EFEFEF",
  textgray: "#565656",
  lightBlue: "#D9E0EC",
  green: "#00AC4F",
  red: "#FF002E",
  black: "#363639",
};

// Global Style

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        overflow-x: hidden;
        min-height: 100vh;
        padding-top: 100px;
    }
    h1,h2,h3, p {
        color: black;
        margin: 0;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .common-text{
        font-family: ${dm_sans.style.fontFamily};
        font-size: ${resFont(18, 20)};
        color: ${colors.textgray};
    }
    .dm-sans{
        font-family: ${dm_sans.style.fontFamily};
    }
    .int-cf{
        font-family: ${integralCF.style.fontFamily};
    }
    .poppins{
        font-family: ${poppins.style.fontFamily};
    }
    .averta{
        font-family: ${averta.style.fontFamily};
    }
    .red{
        color: red;
    }
    .custom-container{
        padding-left:7.5%;
        padding-right: 7.5%;
        @media screen and (max-width: 1366px){
            padding-left: 5%;
            padding-right: 5%;
        }
        @media screen and (max-width: 1250px){
            padding-left: 3%;
            padding-right: 3%;
        }
        @media screen and (max-width: 576px){
            padding-left: 20px;
            padding-right: 20px;
        }
    }
    
    section{
        padding-top: 30px;
        padding-bottom: 30px;
        @media screen and (min-width: 768px) {
            padding-top: 60px;
        padding-bottom: 60px;
        }
    }
`;
export default GlobalStyle;
