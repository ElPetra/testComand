import s from "./Header.module.css";
import img from "./orange.jpg";

function Header() {
  return (
    <header>
      <div className={s.logo}>
        <img className={s.logoImg} src={img} alt="logo" />
      </div>
      <div className={s.headerInfo}>
        <a href="##" className={s.headerLink}>О нас</a>
        <a href="##" className={s.headerLink}>Продукция</a>
        <a href="##" className={s.headerLink}>Отзывы</a>
        <a href="##" className={s.headerLink}>Контакты</a>
      </div>
    </header>
  );
}

export default Header;
