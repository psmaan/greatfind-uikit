import { Meta, StoryObj } from '@storybook/react';
import AIChatInputField from './AIChatInputField';

const meta: Meta<typeof AIChatInputField> = {
    component: AIChatInputField,
    title: 'Input Fields/AIChatInputField',
};

export default meta;

export const Default: StoryObj<typeof AIChatInputField> = {
    args: {
        questions: [
            `What's a fair price for this model?`,
            `Is it worth paying for an extended warranty?`,
            `How do I evaluate the car's condition?`,
            `Should I buy from a dealer or private seller?`,
        ],
    },
};
