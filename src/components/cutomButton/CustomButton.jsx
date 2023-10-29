import { Button } from '@chakra-ui/react'
import React from 'react'

const CutomButton = (props) => {
  return (
    <Button borderRadius={20} variant='solid' bg="#E23744" colorScheme='red' fontWeight='light'>{props.name}</Button>
  )
}

export default CutomButton