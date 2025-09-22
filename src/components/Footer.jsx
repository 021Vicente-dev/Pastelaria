import logo from "./image/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center ml-40 gap-5">
      <div className="text-center p-5">
        <h3 className="text-[20px] font-bold mb-5">Telefones:</h3>
        <p className="text-[20px] font-[400]">(21) 97155-6831</p>
        <p className="text-[20px] font-[400]">(21) 98948-8914</p>
        <h3 className="text-[20px] font-bold ">WhatsApp</h3>
        <p className="text-[20px] font-[400]">(21) 97155-6831</p>
      </div>
      <div>
        <img src={logo} alt="logo" className="w-48"/>
      </div>
      <div className="text-center p-5">
        <h3 className="text-[20px] font-bold mb-5">Horário de Funcionamento</h3>


        <p className="text-[20px] font-[400]">De Quarta a Quinta das 10h às 21h</p>
        <p className="text-[20px] font-[400]">De Sexta e Sábado das 10h às 23h</p>
        <p className="text-[20px] font-[400]">Domingo das 10h às 22h</p>

        <p className="text-[20px] font-[400] mb-5 text-red-400"><span className="text-red-600">OBS:</span> Atendemos somente delivery</p>

      </div>

    </div>
  )
}

export default Footer