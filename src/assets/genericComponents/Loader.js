import React from 'react';
import { Spinner } from 'react-bootstrap';
export function Loader() {
    return (
        <div className="text-align-center">
            <Spinner animation="grow" variant="danger" />
        </div>
    )
}