import { browser } from '$app/environment'
import { QueryClient } from '@tanstack/svelte-query'

export const load = async () => {
    console.log(`+layout.ts load`)
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                enabled: browser,
            },
        },
    })

    return { queryClient }
}