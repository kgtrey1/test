import { IBasicInput } from 'Lib/Inputs/BasicInput/BasicInput'
import React from 'react'

type useGenericFormType = <FieldValuesType>(
    initFieldValues: FieldValuesType,
) => {
    fieldValues: FieldValuesType
    updateValue: (keyToUpdate: keyof FieldValuesType, newValue: string) => void
    generateInputAttributes: (
        nameOfField: keyof FieldValuesType,
    ) => Partial<IBasicInput>
}

const useGenericForm: useGenericFormType = (initFieldValues) => {
    type FieldValuesType = typeof initFieldValues
    const [inputErrorToCheck, setInputErrorToCheck] = React.useState<
        Array<keyof FieldValuesType>
    >([])
    const [fieldValues, setFieldValues] =
        React.useState<FieldValuesType>(initFieldValues)

    const addToInputErrorToCheck = (
        nameOfField: keyof FieldValuesType,
    ): void => {
        setInputErrorToCheck((state) => [...state, nameOfField])
    }

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

    const generateInputAttributes = (
        nameOfField: keyof FieldValuesType,
    ): Partial<IBasicInput> => {
        return {
            value: fieldValues[nameOfField] as any,
            onChange: (e) => updateValue(nameOfField, e.target.value),
            onBlur: () => addToInputErrorToCheck(nameOfField),
        } as Partial<IBasicInput>
    }

    return {
        fieldValues: fieldValues,
        updateValue: updateValue,
        generateInputAttributes: generateInputAttributes,
    }
}

export default useGenericForm
