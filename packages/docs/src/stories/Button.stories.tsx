import { StoryObj, Meta } from '@storybook/react';

import { Button, ButtonProps } from '@andersonnascimentoafsn-ui/react';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Click Here',
    size: 'big'
  },
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      defaultValue: '',
    },
    size: {
      name: 'Sizes',
      description: 'Adjust size',
      defaultValue: 'big',
      type: { name: 'string', required: false },
      table: {
        type: { summary: 'small or big' },
        defaultValue: { summary: 'big' },
      },
      options: ['small', 'big'],
      control: {
        type: 'inline-radio',
      }
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

