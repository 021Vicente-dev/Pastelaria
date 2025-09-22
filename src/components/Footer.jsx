const Footer = () => {
  return (
    <footer className="bg-[#8f654d] text-white py-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
      <div className="text-center">
        <h3 className="text-[20px] font-bold mb-3">Telefones:</h3>
        <p>(21) 97155-6831</p>
        <p>(21) 98948-8914</p>
        <h3 className="text-[20px] font-bold mt-4">WhatsApp</h3>
        <p>(21) 97155-6831</p>
      </div>

      <div>
        <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" className="w-48 mx-auto" />
      </div>

      <div className="text-center">
        <h3 className="text-[20px] font-bold mb-3">Horário de Funcionamento</h3>
        <p>De Quarta a Quinta das 10h às 21h</p>
        <p>De Sexta e Sábado das 10h às 23h</p>
        <p>Domingo das 10h às 22h</p>
        <p className="text-red-400 mt-3">
          <span className="text-red-600 font-bold">OBS:</span> Atendemos somente delivery
        </p>
      </div>
    </footer>
  );
};

export default Footer;
