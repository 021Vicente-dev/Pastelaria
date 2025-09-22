import { useRef, useState } from "react";

const pasteis = [
  { src: "./../../public/image1.jpg", nome: "Pastel de Queijo" },
  { src: "./../../public/image2.png", nome: "Pastel de Carne com queijo" },
  { src: "./../../public/bg.jpg", nome: "Pastel de pizza" },
  { src: "./../../public/image1.jpg", nome: "Pastel de Frango" },
  { src: "./../../public/image2.png", nome: "Pastel de carne" },
  { src: "./../../public/bg.jpg", nome: "Pastel de Palmito" },
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
