import style from './Loader.module.scss';

const Loader = (): JSX.Element => {
    return (
        <div className={style['loader-wrap']}>
            <span className={style['loader']}></span>
        </div>
    )
}

export { Loader }