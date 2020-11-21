import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons'
import {useField} from '@unform/core'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const {fieldName, defaultValue, error, registerField} =  useField(name);
    const inputRef = useRef<HTMLInputElement>(null); 
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const handleInuputBlur = useCallback(() => { // useCallback é usando para nn precisa criar sempre a função(melhor desempenho)
        setIsFocused(false)

        if(inputRef.current?.value){
            setIsFilled(true)
        }else{
            setIsFilled(false)
        }
    }, [])

    const handleInputFocus = useCallback(() => {
       setIsFocused(true)
    }, [])

    useEffect(() => {
        registerField({
            name: fieldName, //nome da tag input
            ref: inputRef.current, // pegando a referencia do input
            path: 'value' //caminho do valor
        })
    }, [fieldName, registerField])    

    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            { Icon && <Icon size={20}/>}
            <input defaultValue={defaultValue} 
             onFocus={handleInputFocus} /* sentando se o input estar focado ou não  */
             onBlur={handleInuputBlur}
             ref={inputRef} 
             {...rest} 
             />
        </Container>
    )
}

export default Input;