'use client';

import { Toast } from '@base-ui-components/react/toast';
import { useActionState, useRef, useEffect } from 'react';

import { createThought } from '@/app/thoughts/actions';
import Button from '@components/ui/Button';

// animation time: ~0.2s (button hover/tap)

export default function ThoughtForm() {
    const [state, formAction, pending] = useActionState(createThought, {}); // no initial state
    const toastManager = Toast.useToastManager();
    const managerRef = useRef(toastManager);

    useEffect(() => {
        managerRef.current = toastManager;
    }, [toastManager]);

    useEffect(() => {
        if (state.success) {
            managerRef.current.add({
                title: 'Thank You!',
                description: 'Your thought has been recorded.',
                type: 'success',
            });
        }

        if (state.errors) {
            for (const error of state.errors.errors) {
                managerRef.current.add({
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
                <label htmlFor="thought" className="text-sm text-white/80">
                    Thought
                </label>
                <textarea
                    id="thought"
                    name="thought"
                    required
                    rows={3}
                    placeholder="What does your mind ponder?"
                    className="w-full rounded-lg border border-white/20 px-3 py-2 text-sm text-white placeholder-white/50 focus:ring-1 focus:ring-white/50 focus:outline-none"
                />
                <p className="text-xs text-red-500">{state.errors?.properties?.thought?.errors.join(' ')}</p>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="author" className="text-sm text-white/80">
                    Author
                </label>
                <input
                    id="author"
                    name="author"
                    required
                    placeholder="Who are you? (leave empty if sus)"
                    className="w-full rounded-lg border border-white/20 px-3 py-2 text-sm text-white placeholder-white/50 focus:ring-1 focus:ring-white/50 focus:outline-none"
                />
                <p className="text-xs text-red-500">{state.errors?.properties?.author?.errors.join(' ')}</p>
            </div>

            <div className="pt-1">
                <Button type="submit" disabled={pending} className="px-3 py-2">
                    Submit
                </Button>
            </div>
        </form>
    );
}
