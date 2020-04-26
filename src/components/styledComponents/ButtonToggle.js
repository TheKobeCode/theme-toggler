import React from 'react'
import { ButtonContainer } from './ButtonContainer'
import { Capsule } from './Capsule'

export const ButtonToggle = props => {
  return (
    <ButtonContainer onClick={props.onClick}>
      {props.active ? (
        <Capsule onClick={props.onClick} className='capsule' />
      ) : (
        <Capsule onClick={props.onClick} active='true' />
      )}
    </ButtonContainer>
  )
}
