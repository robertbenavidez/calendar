import React, { useState, useContext, useEffect } from 'react'
import EventForm from './EventForm'
import moment from 'moment'
import AppContext from '../../context/appContext';

const EditEvent = () => {
    const [color, setColor] = useState('')
    const [eventName, setEventName] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [showTime, setShowTime] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const appContext = useContext(AppContext)
    const { events, colors, selectedEvent, colorObj, editSelectedEvent } = appContext;


    // const colorObj = {
    //     primary: '#0275d8',
    //     success: '#5cb85c',
    //     info: '#5bc0de',
    //     warning: '#f0ad4e',
    //     danger: '#d9534f'
    // }

    useEffect(() => {
        if (Object.keys(selectedEvent).length > 0) {
            setColor(selectedEvent.bgColor);
            setEventName(selectedEvent.title);
            setCheckbox(selectedEvent.allDay);
            let start = '';
            let end = '';
            if (!selectedEvent.allDay) {
                setShowTime(false)
                start = `${moment(new Date(selectedEvent.start)).format()}`;
                end = `${moment(new Date(selectedEvent.end)).format()}`
            } else {
                setShowTime(true)
                start = `${moment(new Date(selectedEvent.start)).format('YYYY-MM-DD')}`;
                end = `${moment(new Date(selectedEvent.end)).format('YYYY-MM-DD')}`
            }
            setStartDate(new Date(start));
            setEndDate(new Date(end))
        }
    }, [selectedEvent, events])


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

    };

    const editEvent = () => {
        const event = setEvent(selectedEvent.id)
        editSelectedEvent(event)
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
            bgColor: color,
            backgroundColor: colorObj[color]
        }
        return event;
    }
    return (
        <>
            <EventForm
                modalId='edit-event'
                title='Edit Event'
                closeModal={closeModal}
                eventName={eventName}
                checkbox={checkbox}
                onCheckboxChange={onCheckboxChange}
                showTime={showTime}
                startDate={new Date()}
                endDate={endDate}
                color={color}
                colors={colors}
                colorObj={colorObj}
                inputChange={inputChange}
                handleChange={handleChange}
                onInputChange={onInputChange}
                eventType={editEvent}
                buttonText='Update'
            />
        </>
    )
}

export default EditEvent;
