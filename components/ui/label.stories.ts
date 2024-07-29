import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';

const meta = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const WithClassName: Story = {
  args: {
    children: 'Label with custom class',
    className: 'text-red-500',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    className: 'peer-disabled:opacity-70 peer-disabled:cursor-not-allowed',
  },
};
