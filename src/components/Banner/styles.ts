import styled from 'styled-components'
import { Container } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  height: 560px;
  width: 100%;
  background-size: cover;
  background-reapet: no-repeat;
  display: block;
  font-weight: bold;

  ${Container} {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
