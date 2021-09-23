import styled from "styled-components";

const Item = ({ item }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={item.img} />
      </ImageWrapper>
      <InfoWrapper>
        <Top>
          <Name>{item.title}</Name>
          <Price>${item.price}</Price>
        </Top>
        <Bottom>
          <Description>{item.desc}</Description>
        </Bottom>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 46.2%;
  height: 180px;
  margin: 20px;
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 2;
`;

const Image = styled.img`
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  object-fit: cover;
  border: 5px solid green;
  border-radius: 3px;
`;

const InfoWrapper = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #000;
`;

const Name = styled.p`
  margin: 0;
`;

const Price = styled.p`
  margin: 0 10px 0 0;
  letter-spacing: 1px;
`;

const Bottom = styled.div`
  flex: 5;
`;

const Description = styled.p`
  font-size: 10px;
`;
export default Item;
