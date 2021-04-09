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

export const Content = styled.div``;
