import { Container } from '../../styles'
import { SectionContainer, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <SectionContainer background={background}>
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  </SectionContainer>
)

export default Section
