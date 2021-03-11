import React, { useState } from 'react';
import ParentNode from '../ParentNode';
import Popup from '../Popup';
import "../../CSS/common.css";

function ChildNode(nodeData) {
    const { data } = nodeData;
    const [childActive, setChildActive] = useState(false);
    const [popupState, setPopupState] = useState(false);
    return (
        <React.Fragment>
            <div className={`button ${data.isRoot ? "root-node" : ""} ${data.children && childActive ? "active" : ""}`} onClick={() => setChildActive(childActive => !childActive)}>
                {data.label}
                <br/>
                {!data.children && (
                    <span className="question-mark" onClick={() => setPopupState(popupState => !popupState)}>?</span>
                )}
            </div>
            {data.children && childActive &&
                <div>
                    <ParentNode data = {data.children}/>
                </div>
            }
            { popupState &&
                <Popup updateState={() => setPopupState(!popupState)} data={data.label}/>
            }
        </React.Fragment>          
    );
}

export default ChildNode;