import React from 'react'
import './Alert.css';
export function Alert(props) {

    // const []
    // const displyBlock = () => {
    //     // console.log("hello");
    //     // document.getElementById("AlertBox").style.display = "none";
    //     // props.Alert.setAlert(null);
    // }
    return (
        props.Alert &&
        <>
        {/* hello */}
            <div id='AlertBox'>
                <p id="AlertMess">

                    {props.alert.msg}
                </p>
                {/* <i onClick={displyBlock} id="AlertBtn">X</i> */}
            </div>
        </>
    )
}

export default Alert