import React from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux"
// import { clearAllUsersType, del/eteUsers } from '../store/slices/UserSlices';


import { deleteUsers } from '../store/slices/UserSlices';
const DeleteAllUsers = () => {
const dispatch = useDispatch();
const Clearall = () => {
 dispatch(deleteUsers());

}
  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={Clearall}> clear User</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .clear-btn{
    text-transform: capitalize;
    background-color: #db338a;
    margin-top:2rem;
  }
`

export default DeleteAllUsers