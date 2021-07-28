import React from 'react';
import styled from 'styled-components';

const H1 = styled.div`
  ${({ theme }) => theme.typography.h1}
  color: ${({ $color, theme }) => theme.colors[$color]};
  margin-bottom: 10rem;
`;

export const Typography = ({
  variant,
  component,
  color,
  children,
  style = {},
}) => {
  switch (variant) {
    case 'h1':
      return <H1 as={component} $color={color} style={style}>{children}</H1>;

    default:
      return <H1 as={component} $color={color} style={style}>{children}</H1>;
  }
};

export default Typography;
