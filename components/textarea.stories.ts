import type { Meta, StoryObj } from '@storybook/react';
import { Textarea, TextareaProps } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the textarea',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text...',
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    placeholder: 'Enter text...',
    className: 'custom-class',
  },
};
