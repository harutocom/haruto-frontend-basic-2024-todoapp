import React from 'react'
import TodoCard from '../Organisms/TodoCard'
import { Title } from '../Atoms/Title'
import styled from 'styled-components'

const index = () => {
  return (
    <>
        <StyledTitleWrapper>
            <Title/>
        </StyledTitleWrapper>
        <TodoCard/>
    </>

  )
}

const StyledTitleWrapper = styled.div`
text-align: center;
`

export default index