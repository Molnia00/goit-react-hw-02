

function Feedback({ statistic , totalFeedback, positive }) { 
    return(
    <>
            <h4>Good: { statistic.good}</h4>
            <h4>Neutral: { statistic.neutral}</h4>
            <h4>Bad: {statistic.bad}</h4>
            <h4>Total: {totalFeedback}</h4>
            <h4>Positive: {positive}%</h4>
    </>)
}
export default Feedback
    
    