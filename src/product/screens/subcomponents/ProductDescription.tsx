import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Product } from '../../types'

const ProductDescription: React.FC<Product> = ({productId}) => {

  console.log('productDescription', productId)
  return (
    <>
        <Stack paddingInlineStart="40px" paddingInlineEnd="500px">
            <Text fontSize="24px" color="black">Descripción del producto</Text>
            <Text> {productId.description}</Text>
        </Stack>
    </>
  )
}

export default ProductDescription