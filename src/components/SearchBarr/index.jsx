import { FiSearch } from "react-icons/fi";
import { Container } from "./style";

export function SearchBarr(props) {
  const {...rest} = props

  return (
    <Container>
      <FiSearch />
      <input {...rest} />
    </Container>
  )
}