import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preta: '#111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }
`

export default GlobalStyle
