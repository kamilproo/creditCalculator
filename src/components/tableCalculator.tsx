import {Divider} from "antd";

type props = {
    total?: number
    nalog?: number
    procent?: number
}

const TableCalculator = ({}: props) => {

    return(
        <div style={{width: 500, position: "absolute", top: 450}}>
            <Divider />
            <p>Сумма кредита</p>
            <p>Процентная ставка</p>
            <p>Налоговый вычет</p>
        </div>
    )
}

export default TableCalculator;