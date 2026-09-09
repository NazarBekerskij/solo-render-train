import styled from 'styled-components';

export const Card = styled.li`
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 16px;
  list-style: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #1f2937;
  margin-top: 0;
  margin-bottom: 12px;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
  font-size: 14px;
  color: #4b5563;

  /* Щоб іконки виглядали гарно й охайно */
  svg {
    color: #2563eb;
    font-size: 16px;
  }
`;