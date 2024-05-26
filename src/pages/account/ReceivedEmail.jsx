import "./account.css";
import icon_mail from "../../assets/icons/icon-mail.svg";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {Link} from "react-router-dom";

const ReceivedEmail = () => {
  return (
    <>
      <h1 className="account__title">Cambio de correo</h1>

      <p className="account__subtitle">
        Por favor da click en el boton para confirmar el cambio de correo.
      </p>

      <img src={icon_mail} alt="" className="icon_mail" />
      <Link to="/my-account">
        <PrimaryBtnForm
          text="Confirmar"
          cssClasses="formCustomBtn purpleBtn"
          id="4"
        />
      </Link>
      <p className="text-link">
        No recibió el email?
        <Link to="/send-email" className="forgot-link">
          Volver a enviar
        </Link>
      </p>
    </>
  );
};
export default ReceivedEmail;
