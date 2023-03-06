import {useState} from "react";
import * as S from './Tree.styles'
import {TiArrowSortedDown, TiMediaPlay} from "react-icons/ti";
import {FiPlus, FiEdit2, FiTrash2} from "react-icons/fi";
import PropTypes from 'prop-types';
import Modal from "../../components/Modal/Modal";

function Tree({option, selected, onSelect, setModalProps}) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  function handleToggle() {
    onSelect(option.id)
    setIsSelectOpen(!isSelectOpen);
  }

  function openModal(e, heading) {
    e.stopPropagation();
    setModalProps({
      isOpen: true,
      name: option.name,
      parentId: option.parentId || '',
      nodeId: option.id || '',
      heading,
    })
  }

  return (
    <S.Wrapper>
      <div onClick={handleToggle} className={selected == option.id ? 'selected' : ''}>
        {option.children.length > 0 && (
          <span>{isSelectOpen ? <TiArrowSortedDown/> : <TiMediaPlay/>}</span>
        )}
        {option.name}
        <span>
          {selected === option.id
            ? <>
              <FiPlus onClick={(e) => openModal(e, 'Add')}/>
              <FiEdit2 onClick={(e) => openModal(e, 'Edit')}/>
              <FiTrash2 onClick={(e) => openModal(e, 'Remove')}/>
            </>
            : <></>
          }
        </span>
      </div>

      {isSelectOpen &&
        option.children.map((child) => (
          <Tree
            key={child.id}
            setModalProps={setModalProps}
            option={child}
            selected={selected}
            onSelect={onSelect}/>
        ))}
    </S.Wrapper>
  );
}

Modal.propTypes = {
  option: PropTypes.object,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  setModalProps: PropTypes.func,
}
export default Tree