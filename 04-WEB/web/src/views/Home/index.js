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
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState([]);


  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
      console.log(response.data)
    })
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length)
      console.log(response.data.length)
    })
  }


  function Notification(){
    setFilterActived('late');
  }


  useEffect(() => {
    loadTasks();
    lateVerify();

  }, [filterActived])


  return (
    <S.Container>
  
      <Header lateCount={lateCount} clickNotification={Notification}/>

      <S.FilterArea>
        <button type="button"        onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos"  actived={filterActived == 'all'}   />
        </button>
        <button type="button"        onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje"   actived={filterActived == 'today'} />
        </button>
        <button type="button"        onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived == 'week'}  />
        </button>
        <button type="button"        onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived == 'month'}  />
        </button>
        <button type="button"     onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived == 'year'}  />
        </button>        
      </S.FilterArea>

      <S.Title>
        <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS'  : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>
        {
          tasks.map(t => (
            <TaskCard type={t.type} title={t.title} when={t.when}/>

          //<Link to={`/task/${t._id}`}>
          //  <TaskCard type={t.type} title={t.title} when={t.when} done={t.done} />    
          //</Link>
          ))  
        }
      </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default Home;
