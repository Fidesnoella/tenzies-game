
export default function Die({ value, isHeld, holdDice }) {
    return (
        <div className={`flex items-center justify-center w-8 sm:w-14 h-8 sm:h-14 rounded-[0.3725rem] shadow-3xl text-black text-[1.2rem] sm:text-3xl leading-9 font-bold cursor-pointer ${isHeld ? "bg-[#59E391]" : "bg-white"}`} onClick={holdDice}>{value}</div>
    );
}
