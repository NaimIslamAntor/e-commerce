import { useState } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Container  = styled.div`
      width: 100%;
      height: 60px;
      background-color: #fff;
      border-bottom: 1px solid #c3bebe;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */

    @media (min-width: 768px) {
    /* flex-direction: row; */
    }

`

const NavBrand = styled.div`
     font-size: 25px;
`


const NavContainer = styled.ul`
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 60px;
      left: ${props => (props.showMenu ? '0' : '-100%')};
      width: 100%;
      background-color: #fff;
      padding-left: 20px;
      transition: 300ms linear;

      @media (min-width: 768px) {
       flex-direction: row;
       position: initial;
       padding-left: 0;
       width: unset;
      }
`


const NavList = styled.li`
      list-style: none;
      padding: 10px 0;

      @media (min-width: 768px) {
       padding: 0;
      }
`


const NavLink = styled.a`
      text-decoration: none;
      color: #000;
      font-size: 15px;
      padding: 10px;
      border-radius: 6px;
      transition: 300ms ease-in;

      &:hover{
        background-color: #d8d4d4;
      }
`

const MenuButton = styled.button`
      border: none;
      outline: none;
      background-color: transparent;

      @media (min-width: 768px) {
       display: none;
      }

`

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)


    const showTheMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <Container>
        <Wrapper>

            <NavBrand>E-COMMERCE</NavBrand>

            <NavContainer showMenu={showMenu}>
                <NavList>
                    <NavLink href="#">Home</NavLink>
                </NavList>
                <NavList>
                    <NavLink href="#">About</NavLink>
                </NavList>
                <NavList>
                    <NavLink href="#">Product</NavLink>
                </NavList>
                <NavList>
                    <NavLink href="#">Contact</NavLink>
                </NavList>
            </NavContainer>

            <MenuButton onClick={showTheMenu}>
            <MenuOutlinedIcon/>
            </MenuButton>
        </Wrapper>
    </Container>
  )
}

export default Navbar