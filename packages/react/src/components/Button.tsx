import { ReactNode, ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: 'bold',
  color: '$white',
  cursor: 'pointer',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  children: ReactNode
}

// export type ButtonProps = {
//   size?: 'small' | 'big'
//   children: ReactNode
// }
