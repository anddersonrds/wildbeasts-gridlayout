import React from 'react';

import wildbeast from '../../assets/images/wildbeast.svg';

import cervo from '../../assets/icons/cervo.svg';
import leao from '../../assets/icons/leao.svg';
import gato from '../../assets/icons/gato.svg';
import vaca from '../../assets/icons/vaca.svg';
import ovelha from '../../assets/icons/ovelha.svg';
import abelha from '../../assets/icons/abelha.svg';

import wolf1 from '../../assets/images/wolf1.jpg';
import wolf2 from '../../assets/images/wolf2.jpg';
import wolf3 from '../../assets/images/wolf3.jpg';

import anuncio1 from '../../assets/images/anuncio-1.jpg';
import anuncio2 from '../../assets/images/anuncio-2.jpg';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Logo to="/">
          <img src={wildbeast} alt="Wildbeasts" />
        </S.Logo>

        <nav>
          <S.ButtonsContainer>
            <li>
              <S.MenuButtons to="/about">sobre</S.MenuButtons>
            </li>
            <li>
              <S.MenuButtons to="/animals">animais</S.MenuButtons>
            </li>
            <li>
              <S.MenuButtons to="/contact">contato</S.MenuButtons>
            </li>
          </S.ButtonsContainer>
        </nav>
      </S.Header>

      <S.Sidenav>
        <ul>
          <li>
            <S.IconsButton to="/">
              <img src={cervo} alt="Cervo" />
            </S.IconsButton>
          </li>
          <li>
            <S.IconsButton to="/">
              <img src={leao} alt="Leão" />
            </S.IconsButton>
          </li>
          <li>
            <S.IconsButton to="/">
              <img src={gato} alt="Gato" />
            </S.IconsButton>
          </li>
          <li>
            <S.IconsButton to="/">
              <img src={vaca} alt="Vaca" />
            </S.IconsButton>
          </li>
          <li>
            <S.IconsButton to="/">
              <img src={ovelha} alt="Ovelha" />
            </S.IconsButton>
          </li>
          <li>
            <S.IconsButton to="/">
              <img src={abelha} alt="Abelha" />
            </S.IconsButton>
          </li>
        </ul>
      </S.Sidenav>

      <S.Content>
        <S.Title>
          <h1>Lobo Cinza</h1>
          <span>da família canis lupus</span>
        </S.Title>

        <S.Features>
          <div>
            <strong>72</strong>
            <span>kg</span>
          </div>
          <div>
            <strong>13</strong>
            <span>age</span>
          </div>
        </S.Features>

        <S.ColWide>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
        </S.ColWide>

        <S.ImgWolf src={wolf1} alt="Wolf 1" />

        <S.Subtitle>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos.
          </p>
        </S.Subtitle>

        <S.ImgWolf2 src={wolf2} alt="Wolf 2" />

        <p>
          O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a
          aumentar proporcionalmente com a latitude, como previsto pela teoria
          de Christian Bergmann. Em geral, a altura, medida a partir dos ombros,
          varia de 60 a 95 centímetros.
        </p>

        <p>
          O peso varia geograficamente. Em média, os lobos europeus pesam 38,5
          kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes,
          25 kg.[7] Embora raros, lobos com mais de 77 kg foram encontrados no
          Alasca, Canadá,[8] e na antiga União Soviética.
        </p>

        <S.ColWide>
          <S.PurpleBlock>
            <p>
              “Há algo no uivar do lobo que tira um homem do aqui e agora e o
              transporta para uma floresta da mente.”
            </p>
          </S.PurpleBlock>
        </S.ColWide>

        <S.PurpleBlock>
          <ul>
            <li>Surgiu: 12.000 anos</li>
            <li>Tipo: Mamífero</li>
            <li>Idade Média: 13 anos</li>
            <li>Macho adulto: 80kg</li>
            <li>Fêmea adulta: 55kg</li>
            <li>Família: Lupus</li>
          </ul>
        </S.PurpleBlock>

        <S.Information>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
          <p>
            É um sobrevivente da Era do Gelo, originário do Pleistoceno
            Superior, cerca de 300 mil anos atrás.[2] O sequenciamento de DNA e
            estudos genéticos reafirmam que o lobo cinzento é ancestral do cão
            doméstico.
          </p>
        </S.Information>

        <S.ColWide>
          <img src={wolf3} alt="Wolf 3" />
        </S.ColWide>
      </S.Content>

      <S.Aside>
        <div>
          <img src={anuncio1} alt="Anuncio 1" />
        </div>

        <div>
          <img src={anuncio2} alt="Anuncio 2" />
        </div>
      </S.Aside>

      <S.Footer>
        <p>AnddersonRds © 2020. Todos os direitos reservados.</p>
      </S.Footer>
    </S.Container>
  );
};

export default Home;
