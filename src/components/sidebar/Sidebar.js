import React from 'react'

const Sidebar = () => {
    return (
        <div className='col-lg-3'>
            <button className='btn btn-primary btn-block'>Create New Event</button>

            <div className='m-t-20'>
                <br />
                <div className='external-event bg-primary'>
                    watch a movie
                </div>
                <div className='external-event bg-success'>
                    LeetCode
                </div>
                <div className='external-event bg-danger'>
                    React Projects
                </div>
            </div>
        </div>
    )
}

export default Sidebar
