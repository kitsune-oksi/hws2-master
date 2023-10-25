import React, { FC } from 'react'
import { TUser } from './HW8'
import s from './HW8.module.css'

// types
type Props = {
    u: TUser
}

const User: FC<Props> = ({ u }) => {
    return (
        <tr id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
            <td id={'hw8-user-name-' + u._id} className={s.nameCol}>
                {u.name}
            </td>
            <td id={'hw8-user-age-' + u._id} className={s.ageCol}>
                {u.age}
            </td>
        </tr>
    )
}

export default User
