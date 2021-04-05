import React, { useState } from 'react'
import EventForm from './EventForm'

const AddEvent = () => {
    const [color, setColor] = useState('')
    const [eventName, setEventName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [showTime, setShowTime] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


    const inputChange = event => {
        setEventName(event.target.value)
    };

    const onInputChange = input => { };

    const onCheckboxChange = event => {
        if (event.target.checked == true) {
            setShowTime(true);
            setCheckbox(true);
        } else {
            setShowTime(false);
            setCheckbox(false);
        }
    };

    const handleChange = () => { };
    const closeModal = () => { };
    const createEvent = () => { };
    return (
        <div >
            <EventForm
                modalId='add-event'
                title='Add Event'
                closeModal={closeModal}
                eventName={eventName}
                checkbox={checkbox}
                onCheckboxChange={onCheckboxChange}
                showTime={showTime}
                startDate={new Date()}
                endDate={endDate}
                color='Primary'
                colors={['Primary', 'Danger']}
                inputChange={inputChange}
                handleChange={handleChange}
                onInputChange={onInputChange}
                eventType={createEvent}
                buttonText='Save'
            />
        </div>
    )
}

export default AddEvent;
