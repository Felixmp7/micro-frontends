import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  color: #fff;
  font-family: 'Segoe UI', Arial, sans-serif;
`;

export const Main = styled.main`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding: 2rem 3rem;
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

`;