import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import * as Style from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
      <Style.CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </Style.CartButton>
    </Style.Header>
  )
}

export default Header
