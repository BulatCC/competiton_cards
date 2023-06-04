import { Card } from '../Card/Card';
import style from './CardList.module.scss';
import { useAppSelector } from "../../store/ReduxHooks";
import { getCards } from "../../store/AppState/AppState";
import { Loader } from "../Loader/Loader";
const Cardlist = (): JSX.Element => {
    const cardsData = useAppSelector(getCards());
    return (
        <>
            { cardsData.length
                ? <ul className={style['card-list']}>
                    {cardsData.map(card => <Card cardData={card} key={card._id} />)}
                </ul>
                : <Loader/>
            }
        </>
    );
};

export { Cardlist };
