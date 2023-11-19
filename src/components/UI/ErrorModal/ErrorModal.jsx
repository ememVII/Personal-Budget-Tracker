import React from 'react'
import Button from '../Button/Button'
import './ErrorModal.css'

export default function ErrorModal(props) {
  return (
    <>
    <div className='error'>
        <div className="error__backdrop" onClick={props.onSubmit}></div>
        <div className="error__content">
            <h2>{props.title}</h2>
            <h3>{props.description}</h3>
            <Button className={`error__btn`} onClick={props.onSubmit}>Ok!</Button>
        </div>
    </div>
    </>
  )
}
