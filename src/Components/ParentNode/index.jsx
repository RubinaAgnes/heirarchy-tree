import ChildNode from '../ChildNode';
import "../../CSS/common.css";

function ParentNode(nodeList) {
    const { data:nodes } = nodeList;
    return (
        <div className="parent-node">
            {nodes.map(node => (
                <ChildNode data={node} key={node.index}/>
            ))}  
        </div>
       
    )
}
export default ParentNode;