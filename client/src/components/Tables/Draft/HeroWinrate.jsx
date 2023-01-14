const HeroWinrate = ({wins, numPicks}) => {
  return (
    <div>
      {wins > -1 && Math.round((wins / numPicks ) * 100) + "%"}
    </div>
  )
}

export default HeroWinrate