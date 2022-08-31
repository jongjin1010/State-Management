import React from "react";
import "./App.css";
import create from "zustand";

interface store {
  count: number;
  increase: () => void;
}

const useStore = create<store>((set) => ({
  count: 0,
  increase() {
    set((state) => ({ count: state.count + 1 }));
  },
}));

function App() {
  const { count, increase } = useStore();
  return (
    <>
      <div>
        <p>카운트 {count}</p>
        <button
          onClick={() => {
            increase();
          }}
        >
          버튼
        </button>
        <Card />
      </div>
    </>
  );
}

function Card() {
  const { count } = useStore();
  return (
    <div>
      <p>카드 {count}</p>
    </div>
  );
}

export default App;
