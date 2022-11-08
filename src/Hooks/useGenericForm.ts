import React from 'react'

type useGenericFormType = <FieldValuesType>(
    initFieldValues: FieldValuesType,
) => {
    fieldValues: FieldValuesType
    updateValue: (keyToUpdate: keyof FieldValuesType, newValue: string) => void
}

const useGenericForm: useGenericFormType = (initFieldValues) => {
    type FieldValuesType = typeof initFieldValues
    const [fieldValues, setFieldValues] =
        React.useState<FieldValuesType>(initFieldValues)

    const updateValue = (
        keyToUpdate: keyof FieldValuesType,
        newValue: string,
    ): void => {
        setFieldValues((state) => {
            return {
                ...state,
                [keyToUpdate]: newValue,
            }
        })
    }

    return {
        fieldValues: fieldValues,
        updateValue: updateValue,
    }
}

export default useGenericForm
