import React, { useState } from 'react';
import ParentNode from '../ParentNode';

function ChildNode(nodeData) {
    const { data } = nodeData;
    const [childActive, setChildActive] = useState(false);
    return (
        <React.Fragment>
            { 
                <div>
                    <div onClick={() => setChildActive(childActive => !childActive)}>
                        {data.label}
                    </div>
                    {data.children && childActive &&
                        <div>
                            <ParentNode data = {data.children}/>
                        </div>
                    }
                </div>
            }
        </React.Fragment>
    );
}

export default ChildNode;