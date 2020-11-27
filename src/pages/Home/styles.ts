import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(160px, 1fr) 3fr 300px;
  grid-template-areas:
    'header   header    header'
    'sidenav  content   ads'
    'footer   footer    footer';

  @media (max-width: 1200px) {
    grid-template-areas:
      'header   header  header'
      'sidenav  content content'
      'sidenav  ads     ads'
      'footer   footer  footer';
  }

  @media (max-width: 760px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'header'
      'sidenav'
      'content'
      'ads'
      'footer';
  }
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

  @media (max-width: 760px) {
    grid-template-columns: auto;
  }
`;

export const Logo = styled(Link)`
  max-width: 200px;

  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

export const ButtonsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li + li {
    margin-left: 30px;

    @media (max-width: 760px) {
      margin-left: 10px;
    }
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

  @media (max-width: 760px) {
    font-size: 1em;
  }
`;

const leftRightArrow = keyframes`
  from {
    right: 30px;
  }
  to {
    right: 20px;
  }
`;

export const Sidenav = styled.nav`
  grid-area: sidenav;
  background: #fafbfc;
  padding: 30px;

  @media (max-width: 760px) {
    position: relative;
    overflow-x: auto;
    padding: 0 30px;

    &:after {
      content: '→';
      position: absolute;
      top: 5px;
      right: 30px;
      color: rgba(0, 0, 0 0.3);
      animation: ${leftRightArrow} 0.5s ease-in 0s infinite alternate;
    }

    ul {
      display: flex;

      li {
        flex: 1 0 60px;
      }
    }
  }
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

  @media (max-width: 760px) {
    margin: 30px 30px 30px 0;
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

  p {
    font-size: 1.2em;
    line-height: 1.6;
    letter-spacing: -0.005em;
    color: rgba(0, 0, 0, 0.7);
  }

  img {
    width: 100%;
  }
`;

export const Subtitle = styled.div`
  > p {
    font-size: 0.875em;
    max-width: 16em;
    color: #b07dfb;
  }
`;

export const Title = styled.div`
  color: #b07dfb;

  h1 {
    font-size: 3.75em;
    font-weight: 700;
    line-height: 1;
  }

  span {
    font-size: 0.875em;
    font-style: italic;
  }
`;

export const Features = styled.div`
  display: flex;
  align-items: flex-start;

  > div {
    position: relative;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    background: linear-gradient(135deg, #8844ee, #b07dfb);
    color: #b07dfb;

    & + div {
      margin-left: 30px;
    }

    strong {
      font-size: 3em;
      line-height: 1;
      margin: 10px auto;
      display: block;
    }

    span {
      display: block;
      background: white;
      border-radius: 0 0 5px 5px;
      padding: 5px 0;
      position: relative;
      top: 2px;
    }
  }
`;

export const PurpleBlock = styled.div`
  align-self: start;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
  background: linear-gradient(135deg, #8844ee, #b07dfb);
  color: white;

  p {
    max-width: 500px;
    font-size: 1.5em;
    font-style: italic;
    text-align: center;
    margin: 0 auto;
    color: white;
  }

  li {
    font-family: Courier, monospace;
    font-size: 1.125em;
    padding: 15px;

    & + li {
      border-top: 2px solid #b07dfb;
    }
  }
`;

export const ColWide = styled.div`
  grid-column: 1 / -1;
`;

export const ImgWolf = styled.img`
  grid-row: span 2;
  align-self: end;
`;

export const ImgWolf2 = styled.img`
  align-self: end;
`;

export const Information = styled.div`
  p + p {
    margin-top: 30px;
  }
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
