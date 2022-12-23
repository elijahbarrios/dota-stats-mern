import ListGroup from "react-bootstrap/ListGroup"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Button from "react-bootstrap/Button"

const DetailedScores = ({ data }) => {
   return (
      <>
         <ListGroup horizontal='lg'>
            {data.scores.slice(0,-6).map((score, index) => {
               return (
                  <ListGroup.Item key={index} className="text-center d-flex flex-wrap align-items-center justify-content-center">
                     <p>{score.name}</p>
                     <OverlayTrigger className="" placement={'bottom'} overlay={
                        <Tooltip>
                           {Math.round(score.score * 100) / 100} {score.name} for {Math.round(score.calculatedScore * 100) / 100} points.
                        </Tooltip>
                        }>
                        <Button className="mx-auto mt-auto" variant="outline-dark">{Math.round(score.score * 100) / 100}</Button>
                     </OverlayTrigger>
                  </ListGroup.Item>
                  )
               })
            }
         </ListGroup>
         <ListGroup horizontal='lg'>
            {data.scores.slice(-6).map((score, index) => {
               return (
                  <ListGroup.Item key={index} className="text-center d-flex flex-wrap align-items-center justify-content-center">
                     <p>{score.name}</p>
                     <OverlayTrigger className="" placement={'bottom'} overlay={
                        <Tooltip>
                           {Math.round(score.score * 100) / 100} {score.name} for {Math.round(score.calculatedScore * 100) / 100} points.
                        </Tooltip>
                        }>
                        <Button className="mx-auto mt-auto" variant="outline-dark">{Math.round(score.score * 100) / 100}</Button>
                     </OverlayTrigger>
                  </ListGroup.Item>
                  )
               })
            }
         </ListGroup>
      </>
   )
}



export default DetailedScores