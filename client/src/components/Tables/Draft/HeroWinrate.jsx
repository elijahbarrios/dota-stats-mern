const HeroWinrate = ({wins, numPicks}) => {
  return (
    <div>
      {numPicks > 0 && Math.round((wins / numPicks ) * 100) + "%"}
    </div>
  )
}

export default HeroWinrate