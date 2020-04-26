import styled, { css } from 'styled-components'

export const Capsule = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colorText};
  height: 100%;
  border-radius: 25px;
  position: absolute;

  transition: all 0.3s ease;

  ${props =>
    props.active &&
    css`
      right: 0%;
    `}
`
