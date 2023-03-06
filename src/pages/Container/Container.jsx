import Tree from "../Tree/Tree";
import {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";
import {useSelector} from "react-redux";

export function Container(props) {
  const options = useSelector((state) => state.tree.list)

  const [selected, setSelected] = useState(null);
  const [nodeName, setNodeName] = useState('');
  const [inputHidden, setInputHidden] = useState(false);
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    heading: '',
    parentId: '',
    nodeId: ''
  });

  useEffect(() => {
    props.getTree({treeName: 'GUID'})
  }, [])
  useEffect(() => {
    setInputHidden(modalProps.heading === 'Remove')
  }, [modalProps.heading])
  const onSelect = (id) => {
    setSelected(id)
  }
  const handleModalProps = (options) => {
    setModalProps(options)
  }
  const onInputChange = (e) => {
    setNodeName(e.target.value)
  }
  const modalConfig = {
    Edit: {
      treeName: 'GUID',
      nodeId: modalProps.nodeId,
      newNodeName: modalProps.name
    },
    Remove: {
      treeName: 'GUID',
      nodeId: modalProps.nodeId,
    },
    Add: {
      treeName: 'GUID',
      parentNodeId: modalProps.parentId,
      nodeName: nodeName,
    }
  }
  const handleAccept = () => {
    console.log(modalConfig[modalProps.heading])
    props[`${modalProps.heading.toLowerCase()}Tree`](modalConfig[modalProps.heading])
  }
  return (
    <main>
      {options.map((option) => (
        <Tree
          setModalProps={handleModalProps}
          key={option.id}
          option={option}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
      <Modal isOpen={modalProps.isOpen} heading={modalProps.heading} handleAccept={handleAccept}>
        {!inputHidden
          ? <div>
            <input type="text" value={nodeName} onChange={onInputChange} placeholder='Node Name'/>
          </div>
          : <p>do you want to delete {modalProps.name}</p>
        }
      </Modal>
    </main>
  );
}
