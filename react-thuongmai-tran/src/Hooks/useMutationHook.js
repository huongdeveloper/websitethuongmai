import { useMutation } from "@tanstack/react-query"
// ============ Quản lý đường kết nối ===========
export const useMutationHooks = (fnCallback) => {
    const mutation = useMutation({
        mutationFn: fnCallback
    })
    return mutation
}
