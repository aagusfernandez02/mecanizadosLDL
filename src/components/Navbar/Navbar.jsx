import styles from "./Navbar.module.css";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import imgLogo from "../../images/mecanizados ldl.svg";
import { GoThreeBars } from "react-icons/go";
import { useEffect, useState } from "react";

export function Navbar({LightBox}) {

    const [Click, setClick] = useState(false);
    const [Mobile,setMobile] = useState(false);

    const handleClick = ()=>{
      if(Mobile){
        setClick(!Click)
      }
    }

    useEffect(() => {
      mobileChecker();
    }, []);

    const mobileChecker = ()=>{
      if(window.innerWidth <= 900){
        setClick(true)
        setMobile(true);
      } else {
        setClick(false)
        setMobile(false);
      }
    }

    window.addEventListener('resize', mobileChecker);
  return (
    <>
      <nav className={styles.navbar__container}>
        <img src={imgLogo} alt='Logo' className={styles.navbar__logo}/>
        <ul className={ `${Mobile?styles.navbar__mobile__menu:styles.navbar__menu} ${Click && styles.hidden}`}>
          <li className={Mobile?styles.navbar__mobile__menu__item:styles.navbar__menu__item} onClick={handleClick}>
          <LinkScroll 
              activeClass={styles.active}//NOT WORKING
              to='inicio'
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              onClick={()=>{Mobile && setClick(true)}}
            >INICIO</LinkScroll></li>
          <li className={Mobile?styles.navbar__mobile__menu__item:styles.navbar__menu__item} onClick={handleClick}>
          <LinkScroll 
              activeClass={styles.active}//NOT WORKING
              to='nosotros'
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              onClick={()=>{Mobile && setClick(true)}}
            >NOSOTROS</LinkScroll></li>
          <li className={Mobile?styles.navbar__mobile__menu__item:styles.navbar__menu__item} onClick={handleClick}>
          <LinkScroll 
              activeClass={styles.active}//NOT WORKING
              to='servicios'
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              onClick={()=>{Mobile && setClick(true)}}
            >SERVICIOS</LinkScroll></li>
          <li className={Mobile?styles.navbar__mobile__menu__item:styles.navbar__menu__item} onClick={handleClick}>
          <LinkScroll 
              activeClass={styles.active}//NOT WORKING
              to='trabajos'
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              onClick={()=>{Mobile && setClick(true)}}
            >TRABAJOS</LinkScroll>
          </li>
          <li className={Mobile?styles.navbar__mobile__menu__item:styles.navbar__menu__item} onClick={handleClick}><LinkScroll 
              activeClass={styles.active}//NOT WORKING
              to='objetivos'
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              onClick={()=>{Mobile && setClick(true)}}
            >OBJETIVOS</LinkScroll></li>
          <li className={Mobile?styles.navbar__mobile__menu__item:styles.navbar__menu__item} onClick={handleClick}>
            <LinkScroll 
              activeClass={styles.active}//NOT WORKING
              to='footer'
              smooth={true}
              spy={true}
              offset={-70}
              duration={800}
              onClick={()=>{Mobile && setClick(true)}}
            >CONTACTO</LinkScroll>
          </li>
        </ul>
      </nav>
      <div 
      className={Mobile?styles.navbar__mobile__menu__icon:styles.hidden}
      onClick={!LightBox && handleClick}
      >
        <GoThreeBars />
      </div>
      
    </>
  );
}
