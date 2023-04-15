import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

interface Action {
    type: 'TOGGLE_A11Y_MODE',
    payload: boolean
}

interface State {
    a11yMode: boolean
}

const ToggleStateContext = createContext<State>({ a11yMode: false })
const ToggleDispatchContext = createContext<Dispatch<Action>>(() => null)

const reducer = (state: State, action: Action): State => {
    const { type, payload } = action

    switch (type) {
        case 'TOGGLE_A11Y_MODE': {
            return {
                ...state,
                a11yMode: payload
            }
        }
        default: {
            return state
        }
    }
}

export const ConfigContext = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, {
        a11yMode: false
    })

    return (
        <ToggleDispatchContext.Provider value={dispatch}>
            <ToggleStateContext.Provider value={state}>
                {children}
            </ToggleStateContext.Provider>
        </ToggleDispatchContext.Provider>
    )
}

export const useToggleDispatchContext = () => useContext(ToggleDispatchContext)
export const useToggleStateContext = () => useContext(ToggleStateContext)
