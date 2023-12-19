import {Container} from "./style"
import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export function SectionInHome(props) {
  const {title, children} = props

  const [scrollPosition, setScrollPosition] = useState(0);
  const cardContainerRef = useRef(null);

  const handleWithScroll = (scrollOffSet) => {
    if (cardContainerRef.current) {
      const newPosition = scrollPosition + scrollOffSet;
      cardContainerRef.current.scrollTo({
        left: newPosition,
        bahavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollLeft = () => {
    handleWithScroll(-100);
  }

  const scrollRight = () => {
    handleWithScroll(100);
  }

  return(
    <Container
      fontApplied="POPPINS_400_MEDIUM"
    >
      <p>{title}</p>

      <div className="content">
        <button className="arrowLeft" onClick={scrollLeft}>
          <SlArrowLeft/>
        </button>
        <button className="arrowRight" onClick={scrollRight}>
          <SlArrowRight/>
        </button>
        <div className="cardContainer" ref={cardContainerRef}>
          {children}
        </div>
      </div>


    </Container>
  )
}

SectionInHome.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}