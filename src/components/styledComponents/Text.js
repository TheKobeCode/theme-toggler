import styled from 'styled-components'

export const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colorText};
  margin-bottom: 25px;

  @media only screen and (min-width: 1280px) {
    font-size: 16px;
  }
`
