import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 40px;
`;
export const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  background: var(--bg-card);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  .content_image {
    display: flex;
    width: 100%;
    height: 400px;
    align-items: center;
    justify-content: center;
    border-right: 3px solid var(--blue);

    img {
      width: 250px;
    }
  }

  .content_description {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 40px;

    .content_details {
      span {
        color: var(--text-title);
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
        color: var(--text-body);
      }
    }

    .content_btn {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 30px;
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
  }
`;
