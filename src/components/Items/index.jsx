import styled from "styled-components";
import Item from "../Item";

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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export default Items;
