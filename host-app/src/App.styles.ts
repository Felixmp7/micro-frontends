import styled from 'styled-components';

export const Container = styled.div`
  &.host-app__container {
    min-height: 100vh;
    background: #181c22;
    color: #fff;
    font-family: 'Segoe UI', Arial, sans-serif;
  }
`;

export const Header = styled.header`
  &.host-app__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    background: #222831;
    border-bottom: 1px solid #333;
    h1 {
      margin: 0;
      font-size: 2rem;
      letter-spacing: 1px;
    }
    select {
      margin-left: 0.5rem;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      border: none;
    }
  }
`;

export const Selector = styled.section`
  &.host-app__selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    h2 {
      margin-bottom: 2rem;
    }
    button {
      margin: 0.5rem 0;
      padding: 0.75rem 2rem;
      font-size: 1.1rem;
      background: #393e46;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.2s;
      &:hover {
        background: #00adb5;
      }
    }
  }
`;
