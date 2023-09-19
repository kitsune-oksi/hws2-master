import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

type CodesDataType = {
    [key: string]: DataType
}
export type DataType = {
    code: string,
    text: string,
    info: string,
    image: string
}
type CodesType = '200' | '400' | '500' | 'error'

const codes: CodesDataType = {
    '200': {
        code: 'Код 200!',
        text: '...всё ок)',
        info: 'код 200 - обычно означает что скорее всего всё ок)',
        image: success200
    },
    '400': {
        code: 'Ошибка 400!',
        text: 'Ты не отправил success в body вообще!',
        info: 'ошибка 400 - обычно означает что скорее всего фронт отправил что-то не то на бэк!',
        image: error400
    },
    '500': {
        code: 'Ошибка 500!',
        text: 'имитация ошибки на сервере',
        info: 'ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)',
        image: error500
    },
    'error': {
        code: 'Error!',
        text: 'Network Error',
        info: 'AxiosError',
        image: errorUnknown
    }
}

export const send = (param: CodesType): Promise<DataType> => new Promise((resolve)=>{
    setTimeout(() => {
        return resolve(codes[param])
    }, 1000)
})