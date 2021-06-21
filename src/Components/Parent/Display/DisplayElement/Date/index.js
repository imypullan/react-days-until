import React from 'react'

function Date({dates}) {
    return (
        <ul>
            {dates.map(date => (
                <li key={date.name}>{date.name}
                    {date.children && <Date dates={date.dates} />}
                </li>
            ))}
        </ul>
    )
}

export default Date
