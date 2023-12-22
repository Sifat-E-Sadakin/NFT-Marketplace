import styled from "styled-components";
import { allArt } from "@/data";
import { BsFilter } from "react-icons/bs";
import { useEffect, useState } from "react";
import ArtBox from "@/components/ui/ArtBox";
import { Col, Row } from "react-bootstrap";
import { colors, resFont } from "@/styles/GlobalStyle";
import BlueButtonOutline from "../ui/BlueButtonOutline";

const ArtCategory = () => {
  const [activeId, setActiveId] = useState(null);
  const [artData, setArtData] = useState(allArt);
  const [category, setSategory] = useState([]);

  // Get Uniqe Category List
  const getCategoryList = () => {
    let newCategory = [allArt[0]];
    allArt.forEach((element) => {
      let cat = newCategory.find((e) => e.category_id === element.category_id);
      if (!cat) {
        newCategory.push(element);
      }
    });
    setSategory(newCategory);
  };

  // Filter arts by categories by clicking category list
  const filterByCategory = (id) => {
    setActiveId(id);
    if (id != null) {
      let filteredData = allArt.filter((element) => element.category_id === id);
      setArtData(filteredData);
    } else {
      setArtData(allArt);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <Wrapper>
      <div className="custom-container">
        <Title className="int-cf">Discover more nfts</Title>
        <Categories>
          <ul>
            <li
              className={activeId === null ? "active dm-sans" : "dm-sans"}
              onClick={() => filterByCategory(null)}
            >
              <span className="dm-sans">All Categories</span>
            </li>
            {category.map((element, index) => {
              return (
                <li
                  key={"artlist-" + index}
                  className={
                    activeId === element.category_id
                      ? "active dm-sans"
                      : "dm-sans"
                  }
                  onClick={() => filterByCategory(element.category_id)}
                >
                  {element.category_name}
                </li>
              );
            })}
          </ul>
          <div className="filter">
            <BsFilter />
            <p className="dm-sans">All Filters</p>
          </div>
        </Categories>
        <Arts>
          <Row className="art-row">
            {artData.map((element, index) => {
              return (
                <Col
                  xl="3"
                  lg="4"
                  sm="6"
                  key={"category-data-" + index}
                  className="art-col"
                >
                  <ArtBox artData={element}>{element.category_name}</ArtBox>
                </Col>
              );
            })}
          </Row>
        </Arts>
        <MoreButton>
          <BlueButtonOutline
            text="More NFT's"
            fontSize="20"
            fontFamily="dm-sans"
          />
        </MoreButton>
      </div>
    </Wrapper>
  );
};

export default ArtCategory;

const Wrapper = styled.section`
  background-color: rgba(217, 224, 236, 0.2);
`;

const Title = styled.h2`
  font-size: ${resFont(32, 36)};
  font-weight: 700;
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 30px;
      padding: 10px 20px;
      border-radius: 30px;
      background-color: rgba(220, 220, 220, 0.2);
      margin-right: 15px;
      cursor: pointer;
      font-weight: 500;
      display: flex;
      align-items: center;
      transition: 0.3s;
      &:hover {
        background-color: #3d00b7;
        color: white;
      }
    }
    .active {
      background-color: #3d00b7;
      color: white;
    }
  }
  .filter {
    margin-top: 30px;
    display: flex;
    align-items: center;
    color: #3d00b7;
    padding: 10px 20px;
    background-color: ${colors.lightgray};
    border-radius: 30px;
    cursor: pointer;
    p {
      font-weight: 700;
      color: ${colors.blue};
    }
    svg {
      font-size: 32px;
      margin-right: 10px;
    }
  }
`;

const Arts = styled.div`
  .art-row {
    margin: 0px -10px;
  }
  .art-col {
    padding: 0px 10px;
  }
`;

const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  button {
    height: 60px;
    padding: 10px 30px;
  }
`;
