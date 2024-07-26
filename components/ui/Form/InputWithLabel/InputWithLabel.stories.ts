import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { InputWithLabel } from './InputWithLabel';

const meta = {
  title: 'ui/InputWithLabel',
  component: InputWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof InputWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    label: 'Text Input',
    type: 'text',
    placeholder: 'Enter text',
  },
};

export const Password: Story = {
  args: {
    label: 'Password Input',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Email: Story = {
  args: {
    label: 'Email Input',
    type: 'email',
    placeholder: 'Enter email',
  },
};

export const Number: Story = {
  args: {
    label: 'Number Input',
    type: 'number',
    placeholder: 'Enter number',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};
