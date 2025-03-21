import { TagContainer } from './styles'

export type Props = {
  children: string
  size?: 'small' | 'large'
}

const Tag = ({ children, size }: Props) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
