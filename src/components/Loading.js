import React from 'react'
import Loader from 'react-loader-spinner'

export default function Loading() {
    return (
        <div className="full-page">
            <Loader
                type="Bars"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div>
    )
}
