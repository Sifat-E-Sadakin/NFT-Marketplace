import styled from "styled-components";
import { resFont } from "@/styles/GlobalStyle";
const Count = () => {
  return (
    <CountWrapper>
      <li>
        <h2 className="int-cf">98k+</h2>
        <p className="common-text">Artwork</p>
      </li>
      <li>
        <h2 className="int-cf">12k+</h2>
        <p className="common-text">Auction</p>
      </li>
      <li>
        <h2 className="int-cf">15k+</h2>
        <p className="common-text">Artist</p>
      </li>
    </CountWrapper>
  );
};

export default Count;

const CountWrapper = styled.ul`
  display: flex;
  li {
    margin-right: 25px;
    h2 {
      font-size: ${resFont(32, 48)};
    }
    p {
      margin-top: 0;
    }
  }
`;
