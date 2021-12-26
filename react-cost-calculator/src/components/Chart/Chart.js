
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {

    const dataPointValue = props.dataPoints.map(datapoint => datapoint.value);
    const totalmaxValue = Math.max(...dataPointValue);
    return (
        <div className="chart">
            {
                props.dataPoints.map(
                    datapoint => {
                        <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalmaxValue} label={datapoint.label} />
                    }
                )
            }
        </div>
    );
}

export default Chart;