import styled from 'styled-components';

export const Container = styled.ul`
  &.tlou-characters__container {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0;
  }
`;

export const Item = styled.li`
  &.tlou-characters__item {
    display: flex;
    background: #222;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    gap: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  & img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
  }
  & div {
    display: flex;
    max-width: 280px;
    flex-direction: column;
    align-items: center;
  }
  & div span {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  &.tlou-characters__button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background:#17320c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
  }
  &:hover {
    background:rgb(55, 124, 28);
  }
`;