import css from './HomePage.module.css';

import logo from '../../assets/logo.png';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logotype}>
        <img className={css.logo} src={logo} alt="Logo" />
        <p className={css.slogan}>CARS FOR EVERYONE</p>
      </div>
      <div className={css.call}>
        <p className={css.text}>Explore our car rental service!</p>
        <p className={css.text}>
          Drive away with ease and discover your ideal rental experience.
        </p>
        <Link className={css.link_text} to="/catalog">
          Try it now
          <svg className={css.arrow}>
            <use href={sprite + `#icon-arrow-right`}></use>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
