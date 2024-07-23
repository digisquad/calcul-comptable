import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './CheckBox';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'custom-class',
  },
};
