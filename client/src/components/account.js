import React from 'react'
import { CreateAccountContext } from './providers/createAccountContext'

export const Account = () => {
    return (
        <CreateAccountContext>
            <div>account</div>
        </CreateAccountContext>

    )
}
