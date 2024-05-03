    import s from './News.module.css'
    import src1 from './image1.jpg'
    import src2 from './image2.jpg'
    import src3 from './image3.jpg'

    export const News = () => {
        return (
        <div className={s.container}>
             <div className={s.links}> 
                <h2 className={s.h2}>Новости спорта</h2>
                <div className={s.news}> 
                    <a className={s.newsLink} href="https://lenta.ru/news/2024/05/02/rossiyskaya-biatlonistka-rasskazala-o-perestavshey-otvechat-ey-finke-chempionke/ " 
                    target="_blank" >Российская биатлонистка рассказала о переставшей отвечать ей финке-чемпионке</a>
                     <div className={s.link}>         
                        <img className={s.newsImage} src={src1} alt="биатлон" /> 
                        <p className={s.text}>&nbsp;&nbsp;<span>Р</span>оссийская биатлонистка Екатерина Юрлова-Перхт рассказала об общении с финской чемпионкой мира Кайсой Мякяряйнен. Ее цитирует РИА Новости.Юрлова-Перхт поделилась, что они с Мякяряйнен вместе тренировалась в Контиолахти под руководством Анатолия Хованцева. По словам россиянки, она многому научилась у финки, но сейчас они не общаются. «Мне самой очень интересно, почему Кайса перестала отвечать на мои сообщения», — заявила Юрлова-Перхт.</p>
                    </div>
                </div>
            <div className={s.news}>
                <a className={s.newsLink} href="https://lenta.ru/news/2024/05/02/ekspert-posovetovala-10-uprazhneniy-na-press-s-fitnes-rezinkoy/"  target="_blank">Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой</a>
            <div className={s.link}>            
                    <img className={s.newsImage} src={src2} alt="фитнес-резинка" />
                     <p className={s.text}>&nbsp;&nbsp;<span>Э</span>ксперт посоветовала 10 упражнений на пресс с фитнес-резинкой.Первые семь упражнений подойдут для всех уровней подготовки. Квасова предложила делать скалолаза с резинкой на стопах, подъем таза с резинкой на голенях, подъем ног вверх в планке, велосипед, ножницы, боковую планку и боковые скручивания.</p>
                     </div>
            </div>
                <div className={s.news}>
                    <a className={s.newsLink} href="https://lenta.ru/news/2024/05/02/sbornaya-rossii-po-futbolu-provedet-tovarischeskiy-match-s-belorussiey/"  target="_blank">
                        Сборная России по футболу проведет товарищеский матч с Белоруссией
                    </a>
                    <div className={s.link}>               
                        <img className={s.newsImage} src={src3} alt="футбол" />
                        <p className={s.text}>&nbsp;&nbsp;<span>С</span>борная России по футболу проведет товарищеский матч с Белоруссией.Встреча пройдет в Минске 7 июня. Это будет первый в 2024 году выездной матч для российской команды. Отмечается, что игра пойдет в зачет рейтинга Международной федерации футбола (ФИФА), где Россия занимает 35-е место, а Белоруссия — 96-е.Российские футбольные клубы и сборные не принимают участия в международных турнирах по решению ФИФА и Союза европейских футбольных ассоциаций (УЕФА). Белорусские команды продолжают выступать на соревнованиях, однако все домашние встречи под эгидой УЕФА перенесены на нейтральные поля.</p>
                    </div>
                </div>
            </div>

        </div>
        )
    }