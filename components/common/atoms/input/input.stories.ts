import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Input } from "./index"

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
}

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email",
  },
}

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
  },
}

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
  },
}
