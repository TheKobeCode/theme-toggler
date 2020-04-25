import styled from 'styled-components'

export const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: ${props => props.theme.colorTitle};

  @media only screen and (min-width: 1280px) {
    font-size: 3rem;
  }
`
