import { Meta, StoryObj } from '@storybook/react' 
import { PencilSimple } from 'phosphor-react';
import { Input, InputProps } from './Input';

export default {
    title: 'Components/Input',
    component: Input.Div,
    args: {
        children: (
            <>
                <Input.Icon>
                    <PencilSimple size={18}/>
                </Input.Icon>
                <Input.Input/>
            </>
        )
    },
    argTypes:{

    },
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {};