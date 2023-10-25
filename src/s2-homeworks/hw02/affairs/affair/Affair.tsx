import React, { FC } from 'react'
import {TAffair} from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type Props = {
    // key не нужно типизировать
    affair: TAffair
    deleteAffairCallback: (_id: number) => void
}

const Affair: FC<Props> = ({affair, deleteAffairCallback}) => {
    const {_id, priority} = affair;
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }

    const nameClass = s.name + ' ' + s2[priority]
    const buttonClass = s.closeButton + ' ' + s2[priority]
    const affairClass = s.affair + ' ' + s2[priority]

    return (
        <div
            id={'hw2-affair-' + _id}
            className={affairClass}
        >
            <div id={'hw2-name-' + _id} className={nameClass}>
                {/*создаёт студент*/}
                <span>{affair.name}</span>
                {/**/}
            </div>
            <div id={'hw2-priority-' + _id} hidden>
                {affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + _id}
                className={buttonClass}
                onClick={deleteCallback}
            >
                {/*текст кнопки могут изменить студенты*/}
                X
                {/**/}
            </button>
        </div>
    )
}

export default Affair
