import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
    FC,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectProps = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectProps = DefaultSelectProps & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: FC<SuperSelectProps> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        if(onChangeOption){
            onChangeOption(e.currentTarget.value)
        }
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
