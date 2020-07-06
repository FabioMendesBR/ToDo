import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
`
export const FilterArea = styled.div`
    width:100%;
    display: flex;
    flex-wrap: Wrap;
    justify-content:space-around;
    margin-top:30px;
    button{
        background:none;
        border:none;
        outline:0;
    }


`
export const Title = styled.div`
    width:100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content: center;
    margin:20px;

    h3{
        color: #20295F;
        position: relative;
        top: 30px;
        background: #FFF;
        padding: 0px 20px;
    }    
`

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-wrap: Wrap;
    justify-content:center;
    
        
`