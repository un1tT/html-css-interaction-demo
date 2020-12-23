import React, {useState, MouseEvent} from 'react';

import './Constructor.css';
import Modal from "./Modal/Modal";

export interface ElementToRender {
    element: string;
    display: string;
    position: string;
    color: string;
}

const Constructor = () => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const [elements, setElements] = useState<Map<string, ElementToRender>>(new Map());

    const elementsLayout = [...elements.keys()].map((id) => {
        const { element, position, display, color } = elements.get(id)!;

        return React.createElement(element, {
            key: id,
            style: {position, display, backgroundColor: color, cursor: 'pointer'},
            children: `${element}, Display: ${display}, Position: ${position}`,
            onClick: onDeleteElement(id)
        })
    });

    function onDeleteElement(id: string) {
        return function(e: MouseEvent) {
            e.stopPropagation();

            const updatedElementsMap = new Map(elements);

            updatedElementsMap.delete(id);

            setElements(updatedElementsMap);
        }
    }

    function onAddElement(id: string, newElement: ElementToRender) {
        const updatedElementsMap = new Map(elements);

        updatedElementsMap.set(id, newElement);

        setElements(updatedElementsMap);
    }

    function toggleModal() {
        setIsModalOpened(!isModalOpened);
    }

    return (
        <div className="Constructor">
            <button className="Add-button" onClick={toggleModal} type="button">
                +
            </button>

            <div id="Elements-container" className="Elements-container">
                {elementsLayout}

                <span className="Hint">* You can click on elements to delete</span>
            </div>

            {isModalOpened && <Modal onClose={toggleModal} onSubmit={onAddElement}/>}
        </div>
    )
}

export default Constructor;
