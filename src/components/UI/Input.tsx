import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.scss'

interface InputProps {
    type?: HTMLInputTypeAttribute;
    name?: string;
    label?: ReactNode;
    description?: ReactNode;
    leftSection?: ReactNode;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    variant?: 'default' | 'filled' | 'unstyled';
    placeholder?: string;
    size?: number;
    radius?: number;
    withAsterisk?: boolean;
    error?: string;
    disabled?: boolean;
    className?: string;
}

const setInputAttr = (props: InputProps) => {
    const inputAttr: InputHTMLAttributes<HTMLInputElement> = {}

    const { name, disabled, value, onChange, type, placeholder, size, radius } = props;

    if (name) {
        inputAttr.name = name
    }
    if (disabled) {
        inputAttr.disabled = disabled
    }
    if (value) {
        inputAttr.value = value
    }
    if (onChange) {
        inputAttr.onChange = onChange
    }
    if (placeholder) {
        inputAttr.placeholder = placeholder
    }

    inputAttr.type = type ?? 'text'

    if(size || radius) {
        inputAttr.style = {}
        if(size) {
            inputAttr.style.fontSize = `${size}px`
        }
        if(radius) {
            inputAttr.style.borderRadius = `${radius}px`
        }
    }

    return inputAttr
}

export const Input = (props: InputProps) => {

    const inputProps = setInputAttr(props);

    return (
        <div className={styles['input-block'] + (props.className ? ` ${props.className}` : '') + (props.type === 'radio' ? ` ${styles['radio-input']}` : '')}>
            {props.label && (
                <label>
                    {props.label}
                    {props.withAsterisk && <span className={styles['asterisk']}>*</span>}
                </label>
                )
            }
            {props.description && <span className={styles['description']}>{props.description}</span>}
            <input 
                {...inputProps}
                className={
                    styles['input-field'] 
                    + (props.variant ? ` ${styles[props.variant]}` : ` ${styles['default']}`)
                    + (props.error ? ` ${styles['error']}` : '')}
                >
                {props.leftSection && <span></span>}
            </input>
            {props.error && <span style={{fontSize: '12px'}} className={styles['error']}>{props.error}</span>}
        </div>
    )
}
