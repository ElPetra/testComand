import { BuyButton } from '../BuyButton/BuyButton'
import s from './Card.module.css'

export const Card = ({src, alt, animalType, animalName, gender, color, age, price}) => {
    return <div className={s.card}>
        <img src={src} alt={alt} className={s.photo}/>
        <div className={s.about}>
            <h2 className={s.title}>{animalName}</h2>
            <p className={s.descr}>Вид животного: {animalType}</p>
            <p className={s.descr}>Пол: {gender}</p>
            <p className={s.descr}>Окрас: {color}</p>
            <p className={s.descr}>Возраст: {age}</p>
            <p className={s.price}>Цена: {price}</p>
        </div>
        <BuyButton/>
    </div>
}