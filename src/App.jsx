import {useState} from 'react'
import styled from "styled-components";
import Categories from "./components/Categories";
import Items from "./components/Items";
import data from './data'
import {mobile} from './responsive'

const allCategories = ['all', ...new Set(data.map(item => item.category))]

const App = () => {
  const [categories] = useState(allCategories)
  const [items, setItems] = useState(data)

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data)
      return
    }
    const newItems = data.filter((item) => (
      item.category === category
    ))
    setItems(newItems)
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>Menu</Title>
        <Categories categories={categories} filterItems={filterItems}></Categories>
        <Items items={items}></Items>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  ${mobile({
    marginTop: "0"
  })}
`;

const Title = styled.h1`
`;

export default App;
