import { Timer, TimerDivProps } from "./Timer";
import {Meta, StoryObj} from '@storybook/react';
import { Clock } from 'phosphor-react';

export default {
    title: 'Components/Timer',
    component: Timer.Div,
    args: {
        children: (
            <>
                <Timer.Icon><Clock size={18}/></Timer.Icon>
                <Timer.Input/>
            </>
        ),
    },
    argTypes:{

    }
} as Meta<TimerDivProps>

export const Default: StoryObj<TimerDivProps> = {};