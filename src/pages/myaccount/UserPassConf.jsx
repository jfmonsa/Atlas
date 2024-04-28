import Card from "../../components/card/Card.jsx";
import InputText from "../../components/inputText/InputText.jsx";
import PrimaryBtnForm from "../../components/buttons/primaryBtn/PrimaryBtnForm.jsx";
import {Link, Form} from "react-router-dom";

const ConfPassUs = () => {
  return (
    <Card cardDialog h1_text="Confirma tu contraseña">
      <Form method="post" action="">
        <InputText
          holder="Contraseña actual"
          type={"password"}
          typecss={"access"}
          text="Contraseña actual"
        />
        <Link to="/change-pass">
          <PrimaryBtnForm text="Enviar" cssClasses="formCustomBtn black2Btn" />
        </Link>
      </Form>
    </Card>
  );
};

export default ConfPassUs;
