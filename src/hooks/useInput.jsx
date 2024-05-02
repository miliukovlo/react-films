import { useState } from "react"

export const useInput = (currentValue) => {
    const [value, setValue] = useState(currentValue)
    const [isChanged, setIsChanged] = useState(false)

    const onChange = e => {
        setIsChanged(true)
        setValue(e.target.value)
    }

    return {
        value,
        setValue,
        onChange,
        isChanged,
        setIsChanged
    }
}