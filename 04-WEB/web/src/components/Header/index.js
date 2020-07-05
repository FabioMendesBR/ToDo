import React from 'react';
import * as S from './styles';

import logo from '../../assets/l';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <image src={logo} alt={logo}></image>;

      </S.LeftSide>
      <S.RightSide>

      </S.RightSide>
    </S.Container>
  )

}

export default Header;
