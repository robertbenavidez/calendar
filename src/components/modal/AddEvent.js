import React from 'react'
import EventForm from './EventForm'

const AddEvent = () => {
    const inputChange = event => { };
    const onInputChange = input => { };
    const onCheckboxChange = () => { };
    const handleChange = () => { };
    const closeModal = () => { };
    const createEvent = () => { };
    return (
        <div >
            <EventForm
                modalId='add-event'
                title='Add Event'
                closeModal={closeModal}
                eventName='Watch Movies'
                checkbox={false}
                onCheckboxChange={onCheckboxChange}
                showTime={false}
                startDate={new Date()}
                endDate={new Date()}
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
