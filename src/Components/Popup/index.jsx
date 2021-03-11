import { useState } from "react";

function Popup({updateState, data:label}) {
    const [secret, setSecret] = useState(false);
    const [cellValue, setCellValue] = useState("Cell");
    const [wifiValue, setWifiValue] = useState("wifi");
    return (
        <div className="popup-wrapper">
            <div className="popup-content">
                <div className="close-button" onClick={updateState}>X</div>
                <div className="popup-content-header">Details</div>
                <div className="label">{label}</div>
                <hr/>
                <div className="popup-subheader">Mark As Secret</div>
                <label className="switch">
                    <input onClick={()=>setSecret(!secret)} type="checkbox" defaultChecked/>
                    <span className="slider round"></span>
                 </label>
                <br/>
                <div className="popup-subheader">Subclass</div>
                <table>
                    <tr>
                        <th>
                            <input 
                                type="text" 
                                value={cellValue} 
                                onChange={(event)=>setCellValue(event.target.value)}
                            />
                        </th>
                        <th>
                            <input 
                                type="text" 
                                value={wifiValue}
                                onChange={(event)=> setWifiValue(event.target.value)}
                            />
                        </th>
                    </tr>
                    <tr>
                        <td># of PPN</td>
                        <th> 2</th>
                    </tr>
                    <tr>
                        <td># of MPN</td>
                        <th>10</th>
                    </tr>  
                </table>
                <div className="popup-subheader-bold">Attributes</div>
                <hr/>
                <div className="popup-subheader">Nand</div>
                <table>
                    <tr>
                        <th>1 TB</th>
                        <th>512 GB</th>
                    </tr>
                    <tr>
                        <th>256 GB</th>
                        <th>64 GB</th>
                    </tr>
                </table>
                <div className="popup-subheader">Color</div>
                <table>
                    <tr>
                        <th>Silver</th>
                        <th>Space Gray</th>
                    </tr>
                </table>
                <div className="popup-subheader">Connectivity</div>
                <table>
                    <tr>
                        <th>Cell</th>
                        <th>Wifi</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Popup;