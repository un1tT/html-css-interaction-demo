import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import { v4 as uuid } from 'uuid';
import './Modal.css';
import {Elements, DisplayProperty, PositionProperty, ELEMENT_PLACEHOLDER, DISPLAY_PLACEHOLDER, POSITION_PLACEHOLDER} from "./Modal.constant";
import {ElementToRender} from "../Constructor";

interface ModalProps {
    onClose: () => void;
    onSubmit: (id: string, element: ElementToRender) => void;
}

const Modal = (props: ModalProps) => {
    const { onClose, onSubmit } = props;
    const [selectedElement, setSelectedElement] = useState<string>(ELEMENT_PLACEHOLDER);
    const [selectedDisplay, setSelectedDisplay] = useState<string>(DISPLAY_PLACEHOLDER);
    const [selectedPosition, setSelectedPosition] = useState<string>(POSITION_PLACEHOLDER);
    const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp, false);

        return (() => {
            window.removeEventListener('keyup', handleKeyUp, false);
        })
    })

    function handleKeyUp(e: any) {
        if (e.key === 'Escape') {
            e.preventDefault();
            onClose();
            window.removeEventListener("keyup", handleKeyUp, false);
        }
    }

    function onChangeElement(e: ChangeEvent<HTMLSelectElement>) {
        setSelectedElement(e.target.value);
    }

    function onChangeDisplay(e: ChangeEvent<HTMLSelectElement>) {
        setSelectedDisplay(e.target.value);
    }

    function onChangePosition(e: ChangeEvent<HTMLSelectElement>) {
        setSelectedPosition(e.target.value);
    }

    function onAddElement(e: FormEvent): void {
        e.preventDefault();

        onSubmit(uuid(),{
            element: selectedElement,
            position: selectedPosition,
            display: selectedDisplay,
            color: selectedColor
        });

        onClose();
    }

    function onChangeColor(e: ChangeEvent<HTMLInputElement>) {
        setSelectedColor(e.target.value);
    }

    function validateData(): boolean {
        return selectedDisplay !== DISPLAY_PLACEHOLDER && selectedPosition !== POSITION_PLACEHOLDER && selectedElement !== ELEMENT_PLACEHOLDER;
    }

    return (
        <div className="Modal">
            <form className="Modal-content" onSubmit={onAddElement} onReset={onClose}>
                <a onClick={onClose} href="#" className="Close-icon"/>

                <div className="Modal-inputs">
                    <select value={selectedElement} onChange={onChangeElement}>
                        <option disabled value={ELEMENT_PLACEHOLDER}>{ELEMENT_PLACEHOLDER}</option>
                        {[...Object.values(Elements)].map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>

                    <select value={selectedDisplay} onChange={onChangeDisplay}>
                        <option disabled value={DISPLAY_PLACEHOLDER}>{DISPLAY_PLACEHOLDER}</option>
                        {[...Object.values(DisplayProperty)].map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>

                    <select value={selectedPosition} onChange={onChangePosition}>
                        <option disabled value={POSITION_PLACEHOLDER}>{POSITION_PLACEHOLDER}</option>
                        {[...Object.values(PositionProperty)].map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>

                    <input type="color" onChange={onChangeColor} value={selectedColor}/>
                </div>

                <button type="submit" className="Submit-button" disabled={!validateData()}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Modal;
