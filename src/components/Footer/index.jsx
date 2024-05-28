import { Container } from './style'
import logogray from '../../assets/logo2.png'

/**
 * Componente Footer para exibir o rodapé da página.
 *
 * Este componente renderiza o logotipo em tons de cinza e o texto de direitos autorais no rodapé da página.
 *
 * @returns {JSX.Element} Um componente de rodapé.
 */
export function Footer() {
  return (
    <Container>
      <footer className='container-footer'>
        <p className='text-area-footer'>© 2024 - Todos os direitos reservados.</p>
      </footer>
    </Container>
  )
}
