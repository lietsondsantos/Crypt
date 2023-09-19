import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 3.5rem;
    height: auto;
    margin-top: 2.5rem;
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 4rem;
    gap: 1rem;

    .list__item {
      width: max-content;
      height: max-content;
      list-style: none;

      .item__btn {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        font-weight: 500;
        padding: 0.5rem;
        border: 1px solid ${({ theme }) => theme.colors.text};
        border-radius: 6px;
        color: ${({ theme }) => theme.colors.text};
        background-color: transparent;
        cursor: pointer;
      }
    }

    .list__item--active {
      .item__btn  {
        color: ${({ theme }) => theme.colors.background};
        background-color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .contain {
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    textarea {
      font-size: 1rem;
      border: none;
      resize: none;
      color: ${({ theme }) => theme.colors.text};
    }

    .contain__leftSide,
    .contain__rightSide {
      width: 27rem;
      height: 20rem;
      padding: 1rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.colors.contrast};
    }

    .contain__leftSide {
      display: flex;
      flex-direction: column;

      .leftSide__topBar {
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .topBar__select,
        .topBar__root {
          height: 2.8rem;
          border: none;
          border-radius: 0.5rem;
          padding: 0.5rem;
          font-size: 1rem;
          color: ${({ theme }) => theme.colors.text};
          border: 1.5px solid ${({ theme }) => theme.colors.background};
          background-color: transparent;
        }

        .topBar__select {
          width: 100%;
        }

        .topBar__root {
          width: 40%;
        }
      }

      .leftSide__textarea {
        width: 100%;
        height: 100%;
        background-color: transparent;
        margin-top: 1rem;
      }
    }

    .contain__rightSide {
      display: flex;
      flex-direction: column;

      .rightSide__textarea {
        width: 100%;
        height: 100%;
        background-color: transparent;
      }

      .bottom {
        justify-content: flex-end;
      }
    }

    .bottom {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: space-between;
      padding: 1.2rem 0 0 0;
      font-size: 1rem;

      .bottom__textCount { }

      .bottom__icon {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
      }
    }
  }
`
