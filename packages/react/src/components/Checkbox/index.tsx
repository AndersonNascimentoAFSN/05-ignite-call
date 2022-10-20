import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox() {
  return (
    <CheckboxContainer aria-label="checkbox" role="checkbox">
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
