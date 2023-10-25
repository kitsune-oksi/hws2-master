import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonProps = DefaultButtonProps & {
    xType?: string
}

const SuperButton: FC<SuperButtonProps> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${xType && s[xType]} ${disabled ? s.disabled : ''} ${className ? className : ''}` // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
