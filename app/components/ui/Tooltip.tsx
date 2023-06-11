'use client';

import Tippy, { TippyProps } from '@tippyjs/react';

export default function Tooltip(props: TippyProps) {
    return (
        <Tippy theme="blur" arrow={false} {...props}>
            {props.children}
        </Tippy>
    );
}
