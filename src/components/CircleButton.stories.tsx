import { Meta, StoryObj } from "@storybook/react";
import { CircleButton, CircleButtonProps  } from "./CircleButton";


export default {
    title:'Components/CircleButton',
    component: CircleButton,
    args: {
        children:'+',
    },
    argTypes:{
        className:{control:false}
    }
} as Meta<CircleButtonProps>

export const Default: StoryObj<CircleButtonProps> = {};