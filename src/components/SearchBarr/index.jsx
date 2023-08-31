import { FiSearch } from "react-icons/fi";
import { Container } from "./style";

export function SearchBarr(props) {
  const {...rest} = props

  return (
    <Container fontApplied="ROBOTO_SMALL_REGULAR">
      <FiSearch />
      <input {...rest} />
    </Container>
  )
}