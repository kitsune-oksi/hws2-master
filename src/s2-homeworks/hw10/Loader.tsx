import s from './Loader.module.css'
import loaderPNG from './loader.png'

export const Loader = () => {
    return <div className={s.loader}>
        <img src={loaderPNG} alt='loading'/>
    </div>
}
