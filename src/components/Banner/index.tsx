import { Imagem, Precos, Titulo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import { Container } from '../../styles'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <Container>
        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,99
          </Precos>
        </div>
        <Tag size="large">Em destaque</Tag>
        <Button type="link" to="/produto" title="Clique aqui para aproveitar">
          Aproveitar
        </Button>
      </Container>
    </Imagem>
  )
}

export default Banner
