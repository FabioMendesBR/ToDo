import styled from 'styled-components';


export const Container = styled.div`
    width:260px;
    height:60px;
    background: ${props => props.actived ? '#EE6B26': '#20295f'} ;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    img{
        width:25px;
        height:25px;
    }

    span{
        color:#fff;
        font-weight:bold;
        align-self: Flex-end;
        font-size: 18px;
    }
    &:hover{
        background: #EE6B26;
    }


`
