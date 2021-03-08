import React, { useState } from 'react';
import ParentNode from '../ParentNode';
import "../../CSS/common.css";

function ChildNode(nodeData) {
    const { data } = nodeData;
    const [childActive, setChildActive] = useState(false);
    return (
        <React.Fragment>
            <div className={`button ${data.isRoot ? "root-node" : ""} ${data.children && childActive ? "active" : ""}`} onClick={() => setChildActive(childActive => !childActive)}>
                {data.label}
            </div>
            {data.children && childActive &&
                <div>
                    <ParentNode data = {data.children}/>
                </div>
            }
        </React.Fragment>          
    );
}

export default ChildNode;