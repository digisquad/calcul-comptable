import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'text',
      description: 'The type of the input',
      defaultValue: 'text',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    className: 'custom-class',
  },
};
