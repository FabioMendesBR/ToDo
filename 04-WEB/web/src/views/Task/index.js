import React, { useState, useEffect } from 'react';
// useState - recurso react - função para armazenarestados de objeto(replica a informação para todos)
// useEffect - recurso react- função disparada quando a tela é carregada 

//import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';

import api from '../../services/api';
//import isConnected from '../../utils/isConnected';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Task() {
  const [lateCount, setLateCount] = useState([]);


  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
      console.log(response.data.length)
    })
  }


  useEffect(() => {
    lateVerify();
  }, [])


  return (
    <S.Container>
  
      <Header lateCount={lateCount} clickNotification={Notification}/>

    

      <Footer/>
    </S.Container>
  )
}

export default Task;
