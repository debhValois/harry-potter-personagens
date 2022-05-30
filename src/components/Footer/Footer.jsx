import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <p>
        Todos os direitos reservados a{" "}
        <a target="_blank" href="https://thicode.netlify.app/">
          Thi Code
        </a>
        &copy;
      </p>
      <p>
        Dados retirado da{" "}
        <a target="_blank" href="https://hp-api.herokuapp.com/">
          {" "}
          API HP{" "}
        </a>
      </p>
    </footer>
  );
}
