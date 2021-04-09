import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 300px;
  background: var(--bg-card);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 20px;

  /* border: 1px solid red; */

  .card_header {
    display: flex;
    height: 150px;
    justify-content: center;
    align-items: center;

    /* border: 1px solid red; */

    img {
      width: 120px;
    }
  }

  .card_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    height: 170px;

    /* border: 1px solid blue; */

    span {
      color: var(--text-title);
      font-weight: 600;
      font-size: 15px;
    }
    p {
      font-size: 13px;
      color: var(--text-body);
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 30px;
      margin-top: 10px;
      background: var(--blue);
      color: var(--text-btn);
      font-size: 13px;
      font-weight: 500;
      border-radius: 5px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
