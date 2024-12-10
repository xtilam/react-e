import { useState } from "react";
import css from "./bai1.module.scss";

export default function Bai1() {
  const [diem1, setDiem1] = useState(0);
  const [diem2, setDiem2] = useState(0);
  const [diem3, setDiem3] = useState(0);
  const [tb, setDiemTB] = useState(0);

  const getXepLoai = (val) => {
    if (val <= 5) return "yếu";
    if (val <= 6.5) return "trung bình";
    if (val <= 8.0) return "khá";
    return "giỏi";
  };

  const tinhTrungBinhHandler = () => {
    setDiemTB(Number(((diem1 + diem2 + diem3) / 3).toFixed(2)));
  };

  return (
    <div className={css.bai1}>
      <div>Diem 1 la: {diem1}</div>
      <input
        value={diem1}
        onChange={(evt) => setDiem1(Number(evt.target.value))}
        type="number"
      />
      <input
        value={diem2}
        onChange={(evt) => setDiem2(Number(evt.target.value))}
        type="number"
      />
      <input
        value={diem3}
        onChange={(evt) => setDiem3(Number(evt.target.value))}
        type="number"
      />
      <div>Diem trung binh la: {tb}</div>
      <div>Xep loại: {getXepLoai(tb)}</div>
      <button onClick={tinhTrungBinhHandler}>Tinh trung binh</button>
    </div>
  );
}
