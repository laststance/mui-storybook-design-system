import MuiButton from '@mui/material/Button'
import React from 'react'

const Button: React.FC = ({ children = 'Hello World' }) => {
  return (
    <>
      <MuiButton children={children} />
    </>
  )
}

export default Button
