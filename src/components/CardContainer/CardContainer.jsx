import s from './CardContainer.module.css'
import {Card} from '../Card/Card'
import whiteCat from '../Card/img/whitecat.png'

export const CardContainer = () => {
    return <div className={s.cardContainer}>
        <Card src={whiteCat} alt='Кошка' animalType='Кошка' animalName='Мурка' color='Белый' gender='Кошка' age='5 месяцев' price='5000 руб'/>
        <Card src={whiteCat} alt='Кошка' animalType='Кошка' animalName='Мурка' color='Белый' gender='Кошка' age='5 месяцев' price='5000 руб'/>
        <Card src={whiteCat} alt='Кошка' animalType='Кошка' animalName='Мурка' color='Белый' gender='Кошка' age='5 месяцев' price='5000 руб'/>

    </div>
}