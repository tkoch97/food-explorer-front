import {Container, ImageBanner, Block, TitleAndSubtitle} from './style.js'
import { useMediaQuery } from "react-responsive";
import BannerImgMobile from "../../assets/banner-home-mobile.png";
import BannerImgDesktop from "../../assets/banner-home-desktop.png";

export function Hero() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const imgBanner = !isDesktop ? BannerImgMobile : BannerImgDesktop;

  return(
    <Container>
      <ImageBanner src={imgBanner} isDesktop={isDesktop}/>
      <Block isDesktop={isDesktop}>
        <TitleAndSubtitle isDesktop={isDesktop}>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </TitleAndSubtitle>
      </Block>
    </Container>
  )
}