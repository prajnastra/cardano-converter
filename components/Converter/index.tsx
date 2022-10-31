import type { NextComponentType, NextPageContext } from 'next'
import { Units } from '../../types'

import { ChangeEvent, useState, useEffect } from 'react'
import {
  Stack,
  Flex,
  InputRightAddon,
  Heading,
  IconButton,
  Input,
  InputGroup,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import { UpDownIcon } from '@chakra-ui/icons'

import { unitConvert } from '../../utils'

interface ConverterProps {}

const Converter: NextComponentType<
  NextPageContext,
  {},
  ConverterProps
> = () => {
  const [values, setValues] = useState<{ ada: number; lovelace: number }>({
    ada: 0.0,
    lovelace: 0.0,
  })

  const { ada, lovelace } = values

  const handleChange =
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.target.value)

      if (!value) return

      if (name === 'ada') {
        console.log(unitConvert(value, Units.lovelace))
        setValues({
          ...values,
          [name]: value,
          lovelace: unitConvert(value, Units.lovelace),
        })
      } else {
        setValues({
          ...values,
          [name]: event.target.value,
          ada: unitConvert(value, Units.ada),
        })
      }
    }

  return (
    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'xs'}
        p={6}
        my={12}
      >
        <Heading
          lineHeight={1.1}
          mb={5}
          fontSize={{ base: '2xl', md: '3xl' }}
          textAlign="center"
        >
          Convert
        </Heading>
        <InputGroup>
          <Input
            type="number"
            placeholder="0.00"
            _placeholder={{ color: 'gray.500' }}
            value={ada}
            onChange={handleChange('ada')}
          />
          <InputRightAddon minW={100}>ada</InputRightAddon>
        </InputGroup>

        <Center>
          <IconButton
            aria-label="Switch values"
            variant="ghost"
            icon={<UpDownIcon />}
          />
        </Center>

        <InputGroup>
          <Input
            type="number"
            placeholder="0.00"
            _placeholder={{ color: 'gray.500' }}
            value={lovelace}
            onChange={handleChange('lovelace')}
          />
          <InputRightAddon minW={100}>lovelace</InputRightAddon>
        </InputGroup>
      </Stack>
    </Flex>
  )
}

export default Converter
