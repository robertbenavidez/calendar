import React, { useContext } from 'react'
import AddEvent from '../modal/AddEvent'

import AppContext from '../../context/appContext'

const Sidebar = () => {

    const appContext = useContext(AppContext);
    const { events } = appContext;

    return (
        <div className='col-lg-3'>
            <button data-toggle='modal' data-target='#add-event' className='btn btn-primary btn-block'>
                Create New Event
            </button>

            <div className='m-t-20'>
                <br />
                {
                    events.length > 0 ?
                        events.map((event, index) =>
                            <div
                                className={`external-event bg-${event.bgColor}`}
                                key={event.id + index}
                            >
                                {event.title}
                            </div>
                        )
                        : 'No Events Added'
                }

                <AddEvent />
            </div>
        </div>
    )
}

export default Sidebar
