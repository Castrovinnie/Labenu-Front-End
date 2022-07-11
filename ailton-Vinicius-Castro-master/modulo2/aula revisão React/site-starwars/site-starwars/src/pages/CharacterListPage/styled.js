import styled from "styled-components"

export const CharacterCard = styled.div`
    
    display: flex;
    justify-content: center;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;    
    border-radius:10px;
    z-index: -1;
    transition: all .8s;
    text-shadow: 0 0 32px; #14fff1,0 0 32px #14fff1;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,110,1) 0%, rgba(73,90,168,1) 50%, rgba(0,212,255,1) 100%);
    color: black ;


    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, rgba(2,0,36,1) 20%, rgba(121,9,110,1) 57%, rgba(0,212,255,1) 100%);
        color: white;     
        

    }
`