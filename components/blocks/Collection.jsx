import { colors } from "@/styles/GlobalStyle";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import BigCard from "../ui/BigCard";
import CollectionCard from "../ui/CollectionCard";
import SmallCard from "../ui/SmallCard";

const Collection = () => {
  return (
    <Section className="custom-container">
      <Row className="custom-row">
        <Col xl="4" md="6" className="custom-col">
          <BigCard />
        </Col>
        <Col xl="4" md="6" className="custom-col custom-col-border">
          <SmallCard />
        </Col>
        <Col xl="4" className="custom-col art">
          <CollectionCard />
        </Col>
      </Row>
    </Section>
  );
};

export default Collection;

const Section = styled.section`
  .custom-row {
    margin: 0px -2%;
  }
  .custom-col {
    padding: 0px 2%;
  }
  .custom-col-border {
    border-right: 1px solid ${colors.lightgray};
    @media screen and (max-width: 1200px) {
      border-right: none;
    }
    @media screen and (max-width: 768px) {
      margin-top: 60px;
    }
  }

  .art {
    @media screen and (max-width: 1200px) {
      margin-top: 60px;
    }
  }
`;
