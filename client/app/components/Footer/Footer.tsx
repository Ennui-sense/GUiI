import "./Footer.scss";

import Logo from "../Logo/Logo";

import { FooterActionsData } from "../../data/FooterData";
import Soc1als from "../Soc1als/Soc1als";
import FooterAction from "../FooterAction/FooterAction";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-inner container">
          <Logo className="footer__logo" />

          <div className="footer__header">
            <div className="footer__address">
              <p className="footer__address-title">Адрес кафедры</p>
              <p className="footer__address-description">
                614990, Пермский край, г. Пермь, Комсомольский проспект, д. 29,
                корпус А, ауд. 209
              </p>
            </div>

            <Soc1als className="footer__soc1als" />
          </div>

          <div className="footer__actions">
            {FooterActionsData.map((action) => (
              <FooterAction
                title={action.title}
                links={action.links}
                key={action.id}
                className="footer__action"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <small className="footer__copyright">
            © <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
            Пермский Политех
          </small>

          <a href="/" className="footer__authors">
            Сделано студентами МТИД-23-1б
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
