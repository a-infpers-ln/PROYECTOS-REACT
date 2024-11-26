type CaloriesDisplayProps = {
    calories: number,
    text: string
}

export default function CaloriesDisplay({calories, text} : CaloriesDisplayProps) {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className="font-black text-6xl text-orange">{calories}</span>
        {text}
    </p>
  )
}
