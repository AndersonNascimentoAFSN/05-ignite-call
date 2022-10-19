import { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

import { Button, ButtonProps } from '@andersonnascimentoafsn-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      // type: { name: 'string', required: true },
      defaultValue: 'Send',
    },
    disabled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
    variant: {
      name: 'variants',
      description: '',
      defaultValue: 'primary',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'primary, secondary or tertiary' },
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      name: 'Sizes',
      description: 'Adjust size',
      defaultValue: 'md',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'sm or md' },
        defaultValue: { summary: 'md' },
      },
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Cancel',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
