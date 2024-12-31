import { Meta, StoryObj } from '@storybook/react';
import SearchInputField from './SearchInputField';
import emailIcon from './../../../assets/emailIcon.png'
import invalidemailIcon from './../../../assets/invalidemailIcon.png'

const meta: Meta<typeof SearchInputField> = {
    component: SearchInputField,
    title: 'Input Fields/SearchInputField',
};

export default meta;

export const Default: StoryObj<typeof SearchInputField> = {
    args: {
        active: 'default',
        imgpath: emailIcon
    },
};

export const Invalid: StoryObj<typeof SearchInputField> = {
    args: {
        active: 'invalid',
        imgpath: invalidemailIcon
    },
};



