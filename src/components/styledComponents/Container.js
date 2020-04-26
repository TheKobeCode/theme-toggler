import styled from 'styled-components'

export const Container = styled.div`
  width: 75%;
  height: auto;
  padding: 25px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${props => props.theme.backgroundBox};
  position: relative;

  @media only screen and (min-width: 1280px) {
    width: 30%;
  }
`
