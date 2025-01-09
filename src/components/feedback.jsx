

function Feedback({ statistic }) { 
    return(
    <>
            <h4>Good: { statistic.good}</h4>
            <h4>Neutral: { statistic.neutral}</h4>
            <h4>Bad: { statistic.bad}</h4>
    </>)
}
export default Feedback
    
    