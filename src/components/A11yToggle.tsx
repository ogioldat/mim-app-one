import { Switch } from "@mui/material";
import { useToggleStateContext, useToggleDispatchContext } from "../ConfigContext"
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function A11yToggle() {
    const { a11yMode } = useToggleStateContext()
    const dispatch = useToggleDispatchContext()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'TOGGLE_A11Y_MODE',
            payload: event.target.checked
        });
    };

    return (
        <>
            <AccessibilityIcon
                fontSize={a11yMode ? 'large' : 'small'}
                color={a11yMode ? 'secondary' : 'inherit'} />
            <Switch color="secondary" checked={a11yMode} onChange={handleChange} />

        </>

    )
}