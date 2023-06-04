import { useEffect } from 'react';
import { Cardlist } from './components/CardList/CardList';
import { useAppDispatch } from './store/ReduxHooks';
import { loadCards } from './store/AppState/AppState';

const App = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCards())
    }, []);

    return (
        <main className='site-wrapper'>
            <div className='container'>
                <Cardlist/>
            </div>
        </main>

    );
};

export { App };
