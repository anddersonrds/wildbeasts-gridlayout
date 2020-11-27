import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(160px, 1fr) 3fr 300px;
  grid-template-areas:
    'header   header    header'
    'sidenav  content   ads'
    'footer   footer    footer';
`;

export const Header = styled.header`
  grid-area: header;
  background: linear-gradient(135deg, #8844ee, #b07dfb);
  padding: 30px;

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  img {
    max-width: 200px;
  }
`;

export const Logo = styled(Link)`
  max-width: 200px;
`;

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li + li {
    margin-left: 30px;
  }
`;

export const MenuButtons = styled(Link)`
  display: block;
  padding: 10px;
  font-size: 1.125em;
  border-radius: 5px;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  transition: 0.1s;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const Sidenav = styled.nav`
  grid-area: sidenav;
  background: #fafbfc;
  padding: 30px;
`;

export const IconsButton = styled(Link)`
  display: block;
  min-width: 60px;
  max-width: 100px;
  padding: 20px;
  margin: 0 auto 30px auto;
  border-radius: 5px;
  background: white;
  box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
  transition: 0.1s ease-in-out;

  &:hover {
    background: #b07dfb;
  }
`;

export const Content = styled.main`
  grid-area: content;
  max-width: 900px;
  padding: 30px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

export const ColWide = styled.p`
  grid-column: 1 / -1;
`;

export const Aside = styled.nav`
  grid-area: ads;
  background: #fafbfc;

  display: grid;
  align-content: start;
  grid-gap: 30px;
  padding: 30px;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background: linear-gradient(135deg, #8844ee, #b07dfb);

  p {
    text-align: center;
    padding: 30px;
    color: white;
  }
`;
