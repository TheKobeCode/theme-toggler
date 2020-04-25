import styled from 'styled-components'

export const Link = styled.a`
  color: ${props => props.theme.linkColor};
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  transition: all .3s ease;

  :hover {
    color: ${props => props.theme.linkHoverColor};
  }
`
