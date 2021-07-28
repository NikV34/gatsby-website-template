import { css } from 'styled-components';

export default function flex({
  column = false,
  wrap = false,
  align = 'stretch',
  justify = 'start',
} = {}) {
  return css`
    display: flex;
    flex-direction: ${column ? 'column' : 'row'};
    flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
    align-items: ${align};
    justify-content: ${justify};
  `;
}
