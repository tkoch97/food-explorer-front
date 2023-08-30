import { Container, Brand } from "./style";
import footerBrand from "../../assets/footer-brand.svg"

export function Footer() {

  return(
    <Container fontApplied="ROBOTO_SMALLEST_REGULAR">

      <Brand>
        <img src={footerBrand} alt="Food Explorer logo" />
      </Brand>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )

}