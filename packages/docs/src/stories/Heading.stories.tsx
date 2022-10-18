import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@andersonnascimentoafsn-ui/react'

export default {
  title: 'Heading/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
  argTypes: {
    children: {
      name: 'children',
      type: { name: 'string', required: true },
    },
    size: {
      name: 'Sizes',
      description: 'Adjust size',
      defaultValue: 'md',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'sm, md, lg, 2xl' },
        defaultValue: { summary: 'md' },
      },
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
