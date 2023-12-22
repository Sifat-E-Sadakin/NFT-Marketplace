import { colors } from "@/styles/GlobalStyle";
import styled from "styled-components";

const BlueButtonOutline = (props) => {
  const { fontFamily, fontSize, text } = props;
  return (
    <Button className={fontFamily} fontSize={fontSize}>
      {text}
    </Button>
  );
};

export default BlueButtonOutline;

const Button = styled.button`
  height: 50px;
  color: ${colors.blue};
  font-size: ${(props) => props.fontSize}px;
  padding: 0px 20px;
  background-color: white;
  border: 2px solid ${colors.blue};
  font-weight: 500;
  border-radius: 60px;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.blue};
    color: white;
  }
`;
