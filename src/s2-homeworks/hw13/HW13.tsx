import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {DataType, send} from './MockData'
import loadingImage from './images/loading.png'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

const HW13 = () => {

    const [data, setData] = useState<DataType>({
        code: '',
        text: '',
        info: '',
        image: ''
    })
    const loading = {
        code: '',
        text: '',
        info: '',
        image: loadingImage
    }

    return (
        <div id={'hw13'}>
            <div className={s2.hwTitle}>Homework #13</div>

            <div className={s2.hw}>
                <div className={s.buttonsContainer}>
                    <SuperButton
                        id={'hw13-send-true'}
                        onClick={()=> {
                            setData(loading);
                            send('200').then(res => setData(res))
                        }}
                        xType={'secondary'}
                    >
                        Send true
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-false'}
                        onClick={()=> {
                            setData(loading);
                            send('400').then(res => setData(res))
                        }}
                        xType={'secondary'}
                    >
                        Send false
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-undefined'}
                        onClick={()=> {
                            setData(loading);
                            send('500').then(res => setData(res))
                        }}
                        xType={'secondary'}
                    >
                        Send undefined
                    </SuperButton>
                    <SuperButton
                        id={'hw13-send-null'}
                        onClick={()=> {
                            setData(loading);
                            send('error').then(res => setData(res))
                        }} // имитация запроса на не корректный адрес
                        xType={'secondary'}
                    >
                        Send null
                    </SuperButton>
                </div>

                <div className={s.responseContainer}>
                    <div className={s.imageContainer}>
                        {data.image && <img src={data.image} className={s.image} alt="status"/>}
                    </div>

                    <div className={s.textContainer}>
                        <div id={'hw13-code'} className={s.code}>
                            {data.code}
                        </div>
                        <div>
                            <div id={'hw13-text'} className={s.text}>
                                {data.text}
                            </div>
                            <div id={'hw13-info'} className={s.info}>
                                {data.info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW13
