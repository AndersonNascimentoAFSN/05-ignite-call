import { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@andersonnascimentoafsn-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/andersonnascimentoafsn.png',
    alt: 'Anderson Nascimento',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Quando não for possível carregar a origem da imagem aparecerá um ícone em seu lugar',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
