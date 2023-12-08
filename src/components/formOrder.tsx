import '../style/formOrder.css'
import {useState} from "react";
import {Alert} from "antd";



const FormOrder = () => {
    const [state, setState] = useState<boolean>(false)

   const handleOnClick = () => {
       setState(true)
   }


    if(!state) {
    return(
            <div className={"Form-container"}>
                <input
                    style={{width: 400, height: 30, borderRadius: 5}}
                    placeholder={"Введите ваше имя"}
                />
                <input
                    placeholder={"Введите ваш телефон"}
                    type={"tel"}
                    style={{width: 400, height: 30, borderRadius: 5}}/>
                <input
                    placeholder={"Введите ваше Email"}
                    type={"email"}
                    style={{width: 400, height: 30, borderRadius: 5}}/>
                <button
                    type={"submit"}
                    style={{width: 300, height: 50, backgroundColor: "black", color: "white"}}
                    onClick={handleOnClick}
                >Подать заявку
                </button>
            </div>
        )}
      return (
          <div className={"form-final"}>
              <p>Спасибо за ваше обращение</p>
              <button onClick={() => setState(false)}>Назад</button>
          </div>
      )
}

export default FormOrder;