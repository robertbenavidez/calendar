import React, { useState, useContext } from 'react'
import EventForm from './EventForm'
import moment from 'moment'
import AppContext from '../../context/appContext';

const AddEvent = () => {
    const [color, setColor] = useState('')
    const [eventName, setEventName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [showTime, setShowTime] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const appContext = useContext(AppContext)
    const { addEvent, events, colors, colorObj } = appContext;

    // const colors = ['Primary', 'Success', 'Info', 'Warning', 'Danger']
    // const colorObj = {
    //     primary: '#0275d8',
    //     success: '#5cb85c',
    //     info: '#5bc0de',
    //     warning: '#f0ad4e',
    //     danger: '#d9534f'
    // }



    const inputChange = event => {
        setEventName(event.target.value)
    };

    const onInputChange = propertyName => event => {
        if (propertyName === 'startDate') {
            setStartDate(event)
        }
        if (propertyName === 'endDate') {
            setEndDate(event)
        }

    };

    const onCheckboxChange = event => {
        if (event.target.checked === true) {
            setShowTime(true);
            setCheckbox(true);
        } else {
            setShowTime(false);
            setCheckbox(false);
        }
    };

    const handleChange = event => {
        console.log(event.target.value)
        if (event.target.value !== 'Select color') {
            setColor(event.target.value);
        } else {
            setColor('');
        }
    };

    const closeModal = () => {
        reset()
    };

    const createEvent = () => {
        const event = setEvent(events.length + 1)
        // add event to events array using context api
        addEvent(event);
        reset();
    };

    const reset = () => {
        setColor('')
        setEventName('')
        setCheckbox(false)
        setShowTime(false)
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const setEvent = id => {
        let start = '';
        let end = '';
        if (!checkbox) {
            start = `${moment(startDate).format()}`;
            end = `${moment(endDate).format()}`
        } else {
            start = `${moment(startDate).format('YYYY-MM-DD')}`;
            end = `${moment(endDate).format('YYYY-MM-DD')}`
        }

        const event = {
            id,
            title: eventName,
            start,
            end,
            allDay: checkbox,
            bgColor: color,
            backgroundColor: colorObj[color]
        }
        return event;
    }
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
                color={color}
                colors={colors}
                inputChange={inputChange}
                handleChange={handleChange}
                onInputChange={onInputChange}
                eventType={createEvent}
                colorObj={colorObj}
                buttonText='Save'
            />
        </div>
    )
}

export default AddEvent;
