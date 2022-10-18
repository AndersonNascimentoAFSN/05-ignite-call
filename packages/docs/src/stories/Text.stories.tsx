import { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@andersonnascimentoafsn-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eius temporibus doloribus perspiciatis laboriosam blanditiis sapiente nam, expedita quis.',
    size: 'md',
  },
  argTypes: {
    size: {
      name: 'Sizes',
      description: 'Adjust size',
      defaultValue: 'md',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'xxs, xs, sm, md' },
        defaultValue: { summary: 'md' },
      },
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
