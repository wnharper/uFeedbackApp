const Stats = ({feedbackData}) => {
    
    const total = feedbackData.length
    let avg = total > 0 ? (feedbackData.reduce((a,b) => a + b.rating, 0))/feedbackData.length : 0
    avg = avg.toFixed(1)

    return (
    <div>Total reviews: {total} | Average rating: {avg}</div>
  )
}

Stats.defaultProps ={
    total: 0,
    avg: 0,
}
export default Stats