import { TagProps } from './Tag.type';
import style from './Tag.module.scss';
const Tag = ({ src, text }: TagProps): JSX.Element => {
    return (
        <div className={style['tag']}>
            <img className={style['tag_img']} src={src}/>
            <span>{text}</span>
        </div>
    );
};

export { Tag };
