import { css } from 'styled-components';

export default function font({
  family,
  height,
  size,
  spacing,
  weight,
} = {}) {
  return css`
    ${size ? `font-size: ${size};` : ''}
    ${weight ? `font-weight: ${weight};` : ''}
    ${family ? `font-family: ${family};` : ''}
    ${height ? `line-height: ${height};` : ''}
    ${spacing ? `letter-spacing: ${spacing};` : ''}
  `;
}
