const HeroWinrate = ({wins, numPicks}) => {
  return (
    <div>
      {Math.round((wins / numPicks ) * 100) + "%"}
    </div>
  )
}

export default HeroWinrate