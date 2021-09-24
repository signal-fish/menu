import styled from "styled-components";
import Item from "../Item";
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const Items = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  ${laptopPro({
    width: "70%",
  })}

  ${laptop({
    width: "80%",
  })}

  ${tabletPro({
    width: "95%",
  })}

  ${tablet({
    width: "100%",
  })}

  ${mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
  })}
`;

export default Items;
