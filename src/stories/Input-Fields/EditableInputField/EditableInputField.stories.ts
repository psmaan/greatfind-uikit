import { Meta, StoryObj } from '@storybook/react';
import EditableInputField from './EditableInputField';
import edit from './../../../assets/editIcon.png';
import save from './../../../assets/saveIcon.png';

const meta: Meta<typeof EditableInputField> = {
    component: EditableInputField,
    title: 'Input Fields/EditableInputField',
};

export default meta;

export const Saved: StoryObj<typeof EditableInputField> = {
    args: {
        active: 'saved',
        imgpath: edit,
        label: 'Ivan Ivanov'
    },
};

export const Editable: StoryObj<typeof EditableInputField> = {
    args: {
        active: 'editable',
        imgpath: save
    },
};



