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
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };
  
  const scrollLeft = (e) => {
    e.preventDefault();
    if (scrollPosition > 0) {
      handleWithScroll(-200);
    }
  }
  
  const scrollRight = (e) => {
    e.preventDefault();
    const containerWidth = cardContainerRef.current.clientWidth;
    const contentWidth = cardContainerRef.current.scrollWidth;
    if (scrollPosition < contentWidth - containerWidth) {
      handleWithScroll(200);
    }
  }

  return(
    <Container
      fontApplied="POPPINS_400_MEDIUM"
    >
      <p>{title}</p>

      <div className="content">
        {scrollPosition > 0 && (
          <button className="arrowLeft" onClick={scrollLeft}>
            <SlArrowLeft/>
          </button>
        )}
        {scrollPosition + cardContainerRef.current?.clientWidth < cardContainerRef.current?.scrollWidth && (
          <button className="arrowRight" onClick={scrollRight}>
            <SlArrowRight/>
          </button>
        )}
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