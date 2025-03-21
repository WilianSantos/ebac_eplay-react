import { Link } from 'react-router-dom'

import * as Style from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <Style.Header>
      <div>
        <Link to="/">
          <img src={logo} alt="E-PLAY" />
        </Link>
        <nav>
          <Style.Links>
            <Style.LinkItem>
              <Link to="/categories">Categorias</Link>
            </Style.LinkItem>
            <Style.LinkItem>
              <a href="#">Novidades</a>
            </Style.LinkItem>
            <Style.LinkItem>
              <a href="#">Promoções</a>
            </Style.LinkItem>
          </Style.Links>
        </nav>
      </div>
      <Style.LinkCart href="#">
        0 - Produto(s) <img src={carrinho} alt="Carrinho" />
      </Style.LinkCart>
    </Style.Header>
  )
}

export default Header
