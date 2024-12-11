import React from 'react'

const Dashboard: React.FC = () => {
    return (
        <div>
            This is a protected component, you cant see this if you are not logged in
        </div>
    )
}

export default Dashboard
