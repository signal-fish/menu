import styled from "styled-components"
import { mobile, tablet, tabletPro, laptop, laptopPro } from "../../responsive";

const Categories = ({ categories, filterItems }) => {
  return (
    <Container>
      {categories.map((category, i) => {
        return (
          <Button key={i} onClick={() => filterItems(category)}>
            {category}
          </Button>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
width: 60%;
display: flex;
justify-content: center;
margin-bottom: 20px;

${mobile({
  width: "100%",
  flexWrap: "wrap"
})}
`

const Button = styled.button`
  margin: 0 20px;
  padding: 5px 15px;
  font-size: 20px;
  border-radius: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  text-transform: capitalize;

  &:hover {
    background: #aaddfd;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .6)
  }
`;

export default Categories
