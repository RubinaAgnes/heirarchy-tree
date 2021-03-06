import ParentNode from "./Components/ParentNode";

function App() {
    const nodeList = [
        {
            index : 0,
            label : "Node 1",
            children : [
                {
                    index : 0,
                    label : "Node 1 1",
                },
                {
                    index : 1,
                    label : "Node 1 2",            
                },
                
            ]      
        },
        {
            index : 1,
            label : "Node 2",
            children : [
                {
                    index : 0,
                    label : "Node 2 1",
                },
                {
                    index : 1,
                    label : "Node 2 2",
                    children : [
                        {
                            index : 0,
                            label : "Node 2 2 1",
                            children : [
                                {
                                    index : 0,
                                    label : "Node 2 2 1 0",
                                },
                                {
                                    index : 1,
                                    label : "Node 2 2 1 1",                            
                                },
                                
                            ]      
                        },
                    ]
                },
                
            ]      
        },
    ];
    return (
        <ParentNode data={nodeList}/>
    );
}

export default App;
