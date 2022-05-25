import './ChartBar.css'

const ChartBar = props => {
    // calc how much to fill
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value/props.maxValue)*100)+ '%';
    }
    return (
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div> {/* style need to be JS object */}
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;