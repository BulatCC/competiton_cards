import { CardProps } from './Card.type';
import { Tag } from '../Tag/Tag';
import { Timer } from "../Timer/Timer";
import style from './Card.module.scss';
import billSvg from '../../assets/svg/bill.svg';
import humansSvg from '../../assets/svg/humans.svg';
import { utils } from '../../services/utils';
import { updateCard } from "../../store/AppState/AppState";
import { useAppDispatch } from "../../store/ReduxHooks";

const Card = ({ cardData: { _id, title, eventStarts, registrationEnd, description, price, participants, isParticipant } }: CardProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const isEventOver = Date.now() - Number(eventStarts) > 0;
    const startsTime = utils.getStartsTime(eventStarts);
    let registrationEndTime = null;
    if (!isEventOver) {
        registrationEndTime = utils.getRegistrationEndTime(registrationEnd);
    }

    const handleClick = () => {
        dispatch(updateCard(_id))
    }

    return (
        <article className={style['card']}>
            <div>
                <h2 className={style['card_title']}>{title}</h2>
                <p className={style['card_event-time']}>Starts At {startsTime} (Moscow Time)</p>
            </div>
            <div>
                <p className={style['card_text']}>{description}</p>
                <div>
                    <Tag src={billSvg} text={`Price ${price} $`}/>
                    <Tag src={humansSvg} text={`${participants} participants enrolled`}/>
                </div>
            </div>
            <div className={style['card_container']}>
                {
                    isParticipant && !isEventOver && <p className={style['card_sub-title']}>You are participant!</p>
                }
                {
                    !isParticipant && !isEventOver && <>
                        <p className={style['card_registration-title']}>Registration ends in:</p>
                        {registrationEndTime && <Timer timerData={registrationEndTime}/>}
                        <button className="button" onClick={handleClick}>Participate</button>
                    </>
                }
                {
                    isEventOver && <p className={style['card_sub-title']}>This competition is over</p>
                }
            </div>
        </article>
    );
};

export { Card };
