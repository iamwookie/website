'use client';

import { Toast } from '@base-ui-components/react/toast';
import { useActionState, useState, useRef, useEffect } from 'react';

import { login } from '@/app/actions/auth';
import Button from '@components/ui/Button';

export default function Password() {
    const [state, formAction, pending] = useActionState(login, {}); // no initial state

    const toastManager = Toast.useToastManager();
    const toastRef = useRef(toastManager);

    useEffect(() => {
        toastRef.current = toastManager;
    }, [toastManager]);

    useEffect(() => {
        if (state.errors) {
            for (const error of state.errors.errors) {
                toastRef.current.add({
                    title: 'Uh Oh!',
                    description: error,
                    type: 'error',
                });
            }
        }
    }, [state]);

    return (
        <form action={formAction} className="flex w-full max-w-md flex-col gap-2">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm text-white/80">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter the access password"
                    className="w-full rounded-lg border border-white/20 px-3 py-2 text-sm text-white placeholder-white/50 focus:ring-1 focus:ring-white/50 focus:outline-none"
                />
                <p className="text-xs text-red-500">{state.errors?.properties?.password?.errors?.join(' ')}</p>
            </div>

            <div className="pt-1">
                <Button type="submit" disabled={pending} className="px-3 py-2">
                    Submit
                </Button>
            </div>
        </form>
    );
}
