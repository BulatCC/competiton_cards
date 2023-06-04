import { TimerProps } from "./Timer.type";
import style from './Timer.module.scss';

const Timer = ({timerData}:TimerProps): JSX.Element => {
    return (
        <ul className={style['timer']}>
            {timerData.map(({title, value}) => (
                <li className={style['timer_item']} key={title}>
                    <span className={style['timer_number']}>{value}</span>
                    <span className={style['timer_title']}>{title}</span>
                </li>
            ))}
        </ul>
    );
}

export {Timer}