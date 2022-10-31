import type { NextComponentType, NextPageContext } from 'next'

import { ReactNode } from 'react'
import { Container } from '@chakra-ui/react'

interface BaseProps {
  children: ReactNode
}

const Base: NextComponentType<NextPageContext, {}, BaseProps> = ({
  children,
}) => {
  return <Container maxW={'7xl'}>{children}</Container>
}

export default Base
