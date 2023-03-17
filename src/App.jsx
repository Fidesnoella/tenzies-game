
import { useEffect, useState } from "react";
import Die from "./components/Die"
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  return (
    <>
      {tenzies && <Confetti />}
      <div className="flex justify-center h-screen items-center">
        <div className="bg-[#0B2434] p-8 flex justify-center m-3">
          <div className="bg-[#F5F5F5] max-h-[31.25rem] max-w-[31.25rem] rounded-[0.625rem] flex flex-col items-center p-[2.125rem] sm:p-[3.375rem]">
            <h1 className="text-[#2B283A] font-bold text-[1.6rem] sm:text-[2.5rem] leading-[1.875rem] sm:leading-[2.9375rem] -tracking-[0.03em]">Tenzies</h1>
            <p className="text-[#4A4E74] pt-3 font-normal text-[0.8192rem] sm:text-[1.3125rem] leading-4 sm:leading-[1.5625rem] -tracking-[0.03em] max-w-[22.75rem] text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="grid grid-cols-5 gap-2 sm:gap-4 pt-12 pb-10">
              {dice.map(die => {
                return (
                  <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
                )
              })}
            </div>
            <button className="bg-[#5035FF] text-white font-bold text-base sm:text-[1.6rem] sm:leading-7 leading-5 rounded-[0.2381rem] w-[5.76rem]- sm:w-[7.125rem]- px-8 h-[2.24rem] sm:h-14 hover:bg-[#6b57ed]" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
