import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? '#79B4B7' : '#79B4B7')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px  ')};
  color: ${({ dark }) => (dark ? '#010606' : '#ffffff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:20px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    margin-bottom:10px;
    padding:10px 10px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#FEFBF3' : '#FEFBF3')};
  
  }
  
`;
