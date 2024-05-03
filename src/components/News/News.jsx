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
                        <p className={s.text}>&nbsp;&nbsp;<span>Р</span>оссийская биатлонистка рассказала о переставшей отвечать ей финке-чемпионке.Российская биатлонистка рассказала о переставшей отвечать ей финке-чемпионкеРоссийская биатлонистка рассказала о переставшей отвечать ей финке-чемпионке.Российская биатлонистка рассказала о переставшей отвечать ей финке-чемпионке.Российская биатлонистка рассказала о переставшей отвечать ей финке-чемпионке.</p>
                    </div>
                </div>
            <div className={s.news}>
                <a className={s.newsLink} href="https://lenta.ru/news/2024/05/02/ekspert-posovetovala-10-uprazhneniy-na-press-s-fitnes-rezinkoy/"  target="_blank">Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой</a>
            <div className={s.link}>            
                    <img className={s.newsImage} src={src2} alt="фитнес-резинка" />
                     <p className={s.text}>&nbsp;&nbsp;<span>Э</span>ксперт посоветовала 10 упражнений на пресс с фитнес-резинкой.Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой.Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой.Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой.Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой,Эксперт посоветовала 10 упражнений на пресс с фитнес-резинкой.</p>
                     </div>
            </div>
                <div className={s.news}>
                    <a className={s.newsLink} href="https://lenta.ru/news/2024/05/02/sbornaya-rossii-po-futbolu-provedet-tovarischeskiy-match-s-belorussiey/"  target="_blank">
                        Сборная России по футболу проведет товарищеский матч с Белоруссией
                    </a>
                    <div className={s.link}>               
                        <img className={s.newsImage} src={src3} alt="футбол" />
                        <p className={s.text}>&nbsp;&nbsp;<span>С</span>борная России по футболу проведет товарищеский матч с Белоруссией.Сборная России по футболу проведет товарищеский матч с Белоруссией.Сборная России по футболу проведет товарищеский матч с Белоруссией.Сборная России по футболу проведет товарищеский матч с Белоруссией.Сборная России по футболу проведет товарищеский матч с Белоруссией.</p>
                    </div>
                </div>
            </div>

        </div>
        )
    }