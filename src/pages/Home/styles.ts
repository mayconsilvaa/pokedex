import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  background: var(--blue);

  img {
    width: 250px;
    height: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px 40px;

  /* border: 2px solid black; */
`;

export const ContentCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(5, 2fr);
  gap: 20px;

  /* border: 1px solid blue; */
  padding: 20px;
`;
