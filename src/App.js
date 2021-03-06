import logo from './logo.svg';
import './App.css';
import ParentNode from "./Components/ParentNode";
function App() {
  const nodeList = [
    {
        index : 0,
        label : "Node 1",
        isRootNode: true,
        isVisited: false,
        children : [
            {
                index : 0,
                label : "Node 1 1",
                isRootNode: false,
                isVisited: false,
            },
            {
                index : 1,
                label : "Node 1 2",
                isRootNode: false,
                isVisited: false,
        
            },
            
        ]      
    },
    {
        index : 1,
        label : "Node 2",
        isRootNode: true,
        isVisited: false,
        children : [
            {
                index : 0,
                label : "Node 2 1",
                isRootNode: false,
                isVisited: false,
            },
            {
                index : 1,
                label : "Node 2 2",
                isRootNode: false,
                isVisited: false,
        
            },
            
        ]      
    },

]
  return (
    <ParentNode data={nodeList}/>
  );
}

export default App;
