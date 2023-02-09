import React from 'react'

import styled from "styled-components";
import {MdDeleteForever} from "react-icons/all.js";
import { useSelector } from 'react-redux';
const DisplayUsers = () => {

    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data);
  return <>
        <Wrapper>
    {
        data.map((user,id) =>{
            return <li key={id}>
                {user}
            </li>
        })
    }

</Wrapper>
  </>

  
   
  
}
const Wrapper = styled.section`
  li{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
      border-top: 1px solid #eee;
    }
  }
  
  .btn-delete{
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`

export default DisplayUsers