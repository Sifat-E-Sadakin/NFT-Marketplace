import { colors, resFont } from "@/styles/GlobalStyle";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import tick from "@/public/tick.png";
import square from "@/public/square.png";

const IconTitleText = () => {
  return (
    <section>
      <Wrapper>
        <div className="custom-container">
          <Row>
            <Col xl="5" lg="12">
              <h2 className="title int-cf">
                The amazing NFT art of the world here
              </h2>
            </Col>
            <Col xl="3" lg="6">
              <div className="icon-box">
                <Image src={tick} alt="Tick Image" />
                <div>
                  <h2 className="dm-sans">Fast Transaction</h2>
                  <p className="dm-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam etiam viverra tellus imperdiet.
                  </p>
                </div>
              </div>
            </Col>
            <Col xl="4" lg="6">
              <div className="icon-box">
                <Image src={square} alt="Square Image" />
                <div>
                  <h2 className="dm-sans">Growth Transaction</h2>
                  <p className="dm-sans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam etiam viverra tellus imperdiet.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </section>
  );
};

export default IconTitleText;
const Wrapper = styled.div`
  padding: 100px 0px;
  background-color: rgba(217, 224, 236, 0.2);
  @media screen and (max-width: 768px) {
    padding: 60px 0px;
  }
  .title {
    max-width: 450px;
    font-size: ${resFont(24, 32)};
  }
  .icon-box {
    display: flex;
    img {
      margin-right: 15px;
    }
    h2 {
      font-size: ${resFont(20, 24)};
      margin-top: 5px;
    }
    p {
      color: ${colors.textgray};
      margin-top: 10px;
    }
    @media screen and (max-width: 1200px) {
      margin-top: 30px;
    }
  }
`;
