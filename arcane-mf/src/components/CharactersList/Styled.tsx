import styled from 'styled-components';

export const Container = styled.ul`
  &.arcane-characters__container {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0;
  }
`;

export const Item = styled.li`
  &.arcane-characters__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #222;
    color: #fff;
    border-radius: 8px;
    padding: 1rem;
    width: 280px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  & img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    object-position: top;
    overflow: hidden;
  }
  & span {
    text-align: center;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  &.arcane-characters__button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #222;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
  }
  &:hover {
    background: #00adb5;
  }
`;