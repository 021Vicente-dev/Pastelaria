import { useRef, useState } from "react";

const pasteis = [
  { src: "https://cdn.discordapp.com/attachments/1418974415902740694/1419385314979614770/0f1cb5b8-5979-42da-9ad7-04f2250234fc.jpg?ex=68d19115&is=68d03f95&hm=1bb529bee7d1c770f6945019ff66e24b6cc192daf1d37bf863d0c581954ab663&", nome: "Pastel de Queijo" },
  { src: "https://cdn.discordapp.com/attachments/1418974415902740694/1419375268405182655/raw.png?ex=68d187ba&is=68d0363a&hm=77d996ad50ea90c899609b57a2f153014b86a244d23de756ca0a48bf6a87d3ff&", nome: "Pastel de Carne com queijo" },
  { src: "https://cdn.discordapp.com/attachments/1418974415902740694/1419374204582887454/c3c19b5d-67dc-4e48-ab66-82d057fbe606.jpg?ex=68d186bd&is=68d0353d&hm=3be4d9106f8b757c6264b805971e777bbe893c1389b1e90a4f087a051bddaebf&", nome: "Pastel de pizza" },
  { src: "https://media.discordapp.net/attachments/1418974415902740694/1419385315415687268/9611c0f4-ccf4-4dd2-807d-00fe207ed849.jpg?ex=68d19116&is=68d03f96&hm=1fe0d1276d190115f29bde3d1bf21fabaef8958723542fd08366efc65dd73734&=&format=webp&width=408&height=544", nome: "Pastel de Frango" },
  { src: "https://media.discordapp.net/attachments/1418974415902740694/1419385315415687268/9611c0f4-ccf4-4dd2-807d-00fe207ed849.jpg?ex=68d19116&is=68d03f96&hm=1fe0d1276d190115f29bde3d1bf21fabaef8958723542fd08366efc65dd73734&=&format=webp&width=408&height=544", nome: "Pastel de carne" },
  { src: "https://media.discordapp.net/attachments/1418974415902740694/1419385315415687268/9611c0f4-ccf4-4dd2-807d-00fe207ed849.jpg?ex=68d19116&is=68d03f96&hm=1fe0d1276d190115f29bde3d1bf21fabaef8958723542fd08366efc65dd73734&=&format=webp&width=408&height=544", nome: "Pastel de Palmito" },
];

const Pasteis = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      <h1 className="text-5xl font-bold mb-4 text-center typing overflow-hidden whitespace-nowrap">
        Cardápios <br /> Pasteis
      </h1>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="p-2 text-[#8f654d] text-3xl hover:text-yellow-400 transition-colors"
        >
          <i className="bi bi-chevron-left cursor-pointer"></i>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-hidden py-8 px-10 flex-1 cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {pasteis.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-38 h-40 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:-translate-y-1 hover:scale-135 hover:shadow-lg flex flex-col items-center bg-[#8f654d]"
              onClick={() => window.open(item.src, "_blank")}
            >
              <img
                src={item.src}
                alt={item.nome}
                className="w-full h-28 object-cover select-none"
                draggable={false}
              />
              <p className="mt-2 text-center text-[15px] font-bold text-white">{item.nome}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="p-2 text-[#8f654d] text-3xl hover:text-yellow-400 transition-colors"
        >
          <i className="bi bi-chevron-right cursor-pointer"></i>
        </button>
      </div>
    </div>
  );
};

export default Pasteis;
