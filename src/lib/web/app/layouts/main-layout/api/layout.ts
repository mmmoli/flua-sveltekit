import { queryClient } from '../../../providers/query-client/lib/query-client'

export const load = async () => {
    console.log(`FSD layout.ts load`)
    return { queryClient }
}