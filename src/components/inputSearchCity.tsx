import { AutoComplete } from 'antd';
import {modelCity} from "../models/model.city";



const InputSearchCity = () => {
    return(
        <AutoComplete
            style={{ width: 400, height: 40 }}
            options={modelCity}
            placeholder="Регион покупки недвижимости"
            filterOption={(inputValue, option) =>
                option?.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        />
    )
}




export default InputSearchCity;




