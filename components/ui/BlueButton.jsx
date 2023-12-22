import { colors } from "@/styles/GlobalStyle";
import styled from "styled-components";

const BlueButton = (props) => {
  const { fontFamily, fontSize, text } = props;
  return (
    <Button className={fontFamily} fontSize={fontSize}>
      {text}
    </Button>
  );
};

export default BlueButton;

const Button = styled.button`
  height: 50px;
  color: #ffffff;
  font-size: ${(props) => props.fontSize}px;
  padding: 0px 40px;
  background-color: ${colors.blue};
  border: 2px solid ${colors.blue};
  font-weight: 500;
  border-radius: 60px;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: ${colors.blue};
  }
`;
