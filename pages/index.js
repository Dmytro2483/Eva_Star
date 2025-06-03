import { useState } from "react";
import { motion } from "framer-motion";

const carModels = {
  Audi: ["A4", "Q7"],
  BMW: ["X5", "3 Series"],
  Toyota: ["Camry", "Corolla"]
};

const colors = ["Black", "Gray", "Beige", "Brown"];
const edges = ["Red", "Blue", "Black", "Gray"];
const textures = ["Соты", "Ромб", "Классика"];
const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg"
];

export default function EvaCarFullSite() {
  const [brand, setBrand] = useState("Audi");
  const [model, setModel] = useState("A4");
  const [color, setColor] = useState("Black");
  const [edge, setEdge] = useState("Red");
  const [texture, setTexture] = useState("Соты");
  const [notes, setNotes] = useState("");

  const handleOrder = () => {
    alert(
      `Заказ отправлен:\nМарка: ${brand}\nМодель: ${model}\nЦвет: ${color}\nСтруктура: ${texture}\nОкантовка: ${edge}\nКомментарий: ${notes}`
    );
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        Конфигуратор EVA-ковриков
      </motion.h1>

      <div style={{ marginTop: '1rem' }}>
        <label>Марка:</label>
        <select value={brand} onChange={(e) => { setBrand(e.target.value); setModel(carModels[e.target.value][0]); }}>
          {Object.keys(carModels).map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Модель:</label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          {carModels[brand].map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Цвет коврика:</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          {colors.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Структура:</label>
        <select value={texture} onChange={(e) => setTexture(e.target.value)}>
          {textures.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Окантовка:</label>
        <select value={edge} onChange={(e) => setEdge(e.target.value)}>
          {edges.map(e => (
            <option key={e} value={e}>{e}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Дополнительные пожелания:</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      <button onClick={handleOrder} style={{ marginTop: '1rem' }}>Оформить заказ</button>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Фотогалерея</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {galleryImages.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} width={300} />
        ))}
      </div>

      <h2 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Контакты</h2>
      <p>📞 Телефон: +380 67 123 4567</p>
      <p>📧 Email: info@evaclone.ua</p>
      <p>📍 Адрес: г. Киев, ул. Примерная, 12</p>
      <p>🕒 Время работы: Пн-Пт 9:00–18:00</p>
    </main>
  );
}
