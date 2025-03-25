import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? cores.verde : 'transparent'};
  border: 2px solid
    ${({ variant }) => (variant === 'primary' ? cores.verde : cores.branca)};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
