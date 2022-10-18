import { ComponentProps, ReactNode } from 'react'
import { styled } from '../styles'

export const Text = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface TextProps extends ComponentProps<typeof Text> {
  children: ReactNode
}
