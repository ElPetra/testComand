import s from './CardContainer.module.css'
import {Card} from '../Card/Card'
import whiteCat from '../Card/img/whitecat.png'
import bigle from '../Card/img/bigle.png'
import guineapig from '../Card/img/guineapig.png'
import humster from '../Card/img/humster.png'
import rat from '../Card/img/rat.png'
import rabbit from '../Card/img/rabbit.png'
import { Container } from '../Container/Container'


export const CardContainer = () => {
    return <Container>
    <div className={s.cardContainer}>
        <Card src={whiteCat} alt='Кошка' animalType='Кошка' animalName='Мурка' color='Белый' gender='Самка' age='5 месяцев' price='10000 руб'/>
        <Card src={bigle} alt='Собака' animalType='Собака' animalName='Мурка' color='Белый' gender='Самец' age='9 месяцев' price='15000 руб'/>
        <Card src={guineapig} alt='Морская свинка' animalType='Морская свинка' animalName='Антон' color='Трехцветный' gender='Самец' age='2 месяца' price='2000 руб'/>
        <Card src={humster} alt='Хомяк' animalType='Хомяк' animalName='Леопольд' color='Белый' gender='Самец' age='1 месяц' price='1800 руб'/>
        <Card src={rat} alt='Крыса' animalType='Крыса' animalName='Виски' color='Черный' gender='Самка' age='2 месяца' price='2500 руб'/>
        <Card src={rabbit} alt='Кролик' animalType='Кролик' animalName='Лапочка' color='Белый' gender='Самка' age='4 месяца' price='5000 руб'/>
    </div>
    </Container>
}