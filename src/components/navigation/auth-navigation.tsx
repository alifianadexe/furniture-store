import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { StyledButton } from '@/components/styled-button'

const AuthNavigation: FC = () => {
  return <Box sx={{ '& button:first-of-type': { mr: 0 } }}></Box>
}

export default AuthNavigation
