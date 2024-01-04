import { useState } from "react";
import { Container } from "./style";
import { IoIosRemove } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";


export function Accountant() {

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [productCount, setProductCount] = useState(0);

  const displayProductCount = productCount === 0 ? 
  '00' : (productCount > 9 ? productCount : `0${productCount}`);

  const increaseProductCount = () => {
    setProductCount(productCount + 1);
  };

  const decreaseProductCount = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  return(
    <Container fontApplied= {isDesktop ? "ROBOTO_BIG_BOLD" : "ROBOTO_SMALL_REGULAR"}>
      <IoIosRemove onClick={decreaseProductCount} cursor='pointer'/>
      <p>{displayProductCount}</p>
      <IoAddOutline onClick={increaseProductCount} cursor='pointer'/>
    </Container>
  )
}