import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
`;
export const BtnNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  background: var(--blue);
  color: var(--text-btn);
  font-weight: 500;
  border-radius: 5px;
  transition: filter 0.2s;
  margin: 0 20px;

  &:hover {
    filter: brightness(0.9);
  }
`;
export const BtnPrevious = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  background: var(--blue);
  color: var(--text-btn);
  font-weight: 500;
  border-radius: 5px;
  transition: filter 0.2s;
  margin: 0 20px;

  &:hover {
    filter: brightness(0.9);
  }
`;
export const BtnNumber = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  background: var(--blue);
  color: var(--text-btn);
  font-weight: 500;
  border-radius: 5px;
  transition: filter 0.2s;
  margin: 0 20px;

  &:hover {
    filter: brightness(0.9);
  }
`;
