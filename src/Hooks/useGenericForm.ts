import { IBasicInput } from 'Lib/Inputs/BasicInput/BasicInput'
import React from 'react'

export type FieldsAttributeType = 'phone' | 'email'
export interface OptionsFieldAttributes {
    type?: FieldsAttributeType
    minLength?: number
    maxLength?: number
    isRequired?: boolean
}

type useGenericFormType = <FieldValuesType>(
    initFieldValues: FieldValuesType,
) => {
    resetAll: () => void
    submitValues: (onSuccess: () => void, onFailure: () => void) => void
    fieldValues: FieldValuesType
    updateValue: (keyToUpdate: keyof FieldValuesType, newValue: string) => void
    generateInputAttributes: (
        nameOfField: keyof FieldValuesType,
        options?: OptionsFieldAttributes | undefined,
    ) => Partial<IBasicInput>
}

const useGenericForm: useGenericFormType = (initFieldValues) => {
    type FieldValuesType = typeof initFieldValues
    const [inputErrorToCheck, setInputErrorToCheck] = React.useState<
        Array<keyof FieldValuesType>
    >([])
    const [fieldValues, setFieldValues] =
        React.useState<FieldValuesType>(initFieldValues)
    const [fieldOptions, setFieldOptions] = React.useState<
        Array<{
            nameOfField: keyof FieldValuesType
            options?: OptionsFieldAttributes
        }>
    >([])

    const addToInputErrorToCheck = (
        nameOfField: keyof FieldValuesType,
    ): void => {
        setInputErrorToCheck((state) => [...state, nameOfField])
    }

    const resetAll = (): void => {
        setInputErrorToCheck([])
        setFieldValues(initFieldValues)
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

    const generateErrorAttributes = (
        value: any,
        options: OptionsFieldAttributes | undefined,
    ) => {
        const resultObj = {
            hasError: false,
            errorMessage: '',
        }
        if (!options) {
            return resultObj
        }
        if (typeof value === 'string') {
            if (
                options.isRequired !== undefined &&
                options.isRequired &&
                value.length === 0
            ) {
                return {
                    hasError: true,
                    errorMessage: `This field is required`,
                }
            } else if (
                options.maxLength !== undefined &&
                value.length > options.maxLength
            ) {
                return {
                    hasError: true,
                    errorMessage: `Please enter less than ${options.maxLength} characters`,
                }
            } else if (
                options.minLength !== undefined &&
                value.length < options.minLength
            ) {
                return {
                    hasError: true,
                    errorMessage: `Please enter more than ${options.minLength} characters`,
                }
            }
        }
        return resultObj
    }

    const generateInputAttributes = (
        nameOfField: keyof FieldValuesType,
        options?: OptionsFieldAttributes,
    ): Partial<IBasicInput> => {
        if (!fieldOptions.find((x) => x.nameOfField === nameOfField)) {
            setFieldOptions((x) => [
                ...x,
                { nameOfField: nameOfField, options: options },
            ])
        }
        return {
            value: fieldValues[nameOfField] as any,
            onChange: (e) => updateValue(nameOfField, e.target.value),
            onBlur: () => {
                if (!inputErrorToCheck.includes(nameOfField)) {
                    addToInputErrorToCheck(nameOfField)
                }
            },
            displayError: inputErrorToCheck.find((x) => x === nameOfField)
                ? true
                : false,
            ...generateErrorAttributes(fieldValues[nameOfField], options),
        } as Partial<IBasicInput>
    }

    const hasErrorInForm = () => {
        for (const x of fieldOptions) {
            if (
                generateErrorAttributes(fieldValues[x.nameOfField], x.options)
                    .hasError
            ) {
                return true
            }
        }
        return false
    }

    const submitValues = (
        onSuccess: () => void,
        onFailure: () => void,
    ): void => {
        setInputErrorToCheck(Object.keys(fieldValues as any) as any)
        if (hasErrorInForm()) {
            onFailure()
        } else {
            onSuccess()
        }
        return
    }

    return {
        resetAll: resetAll,
        submitValues: submitValues,
        fieldValues: fieldValues,
        updateValue: updateValue,
        generateInputAttributes: generateInputAttributes,
    }
}

export default useGenericForm
