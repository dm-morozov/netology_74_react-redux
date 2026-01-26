import type { State } from "./types"

const initialState: State = {
    items: [],
    editingId: null,
    form: {
        name: '',
        price: 0,
    }
} 

export const reducer = (state = initialState, action: any): State => {
    
}