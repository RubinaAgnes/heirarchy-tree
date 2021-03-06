import ChildNode from '../ChildNode';
function ParentNode(nodeList) {
    const { data:nodes } = nodeList;
    return (
        <div>
            {nodes.map(node => (
                <ChildNode data={node} key={node.index}/>
            ))}  
        </div>
       
    )
}
export default ParentNode;