import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

export default {
    title:'Components/Heading',
    component:Heading,
    args:{
        children: 'Adreline',
        size: '2xl',
        className:'text-black'
    },
    argTypes:{
        size:{
            options:['2xl','xl','lg'],
            control:{
                type:'inline-radio' 
            }
        },
        className:{control:false}

    },
} as Meta<HeadingProps>
export const Default: StoryObj<HeadingProps> = {
    args: {
        size: '2xl',
    }
};
export const Medium: StoryObj<HeadingProps> = {
    args: {
        size: 'xl',
    }
};
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
    }
};