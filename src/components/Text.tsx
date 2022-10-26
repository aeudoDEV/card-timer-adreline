import {clsx} from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
    size?: 'md'|'sm'|'xs';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({size = 'md', children, asChild, className}:TextProps) {
    const Comp = asChild? Slot : 'span';

    return (
        <Comp className={clsx('text-white',
        {
            'text-md': size == 'md',
            'text-sm': size == 'sm',
            'text-xs': size == 'xs',
        
        },className)}>{children}</Comp>
    );
}