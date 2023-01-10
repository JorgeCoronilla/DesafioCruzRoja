import React from 'react'
import { CreateProfileContext } from './providers/createProfileContext'

export const Profile = () => {
    return (
        <CreateProfileContext>
            <div>profile</div>
        </CreateProfileContext>

    )
}
