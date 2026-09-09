import styled from 'styled-components';

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px;                             
  padding: 0;
  margin: 0;
  list-style: none;
`;