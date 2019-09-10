import React from 'react';
import { template } from '@babel/core';

const Form = (props) => {
    
    return (
        <form>
            <input name="name" value={team.name} />
            <input name="email" value={team.email} />
            <input name="role" value={team.role} />

        </form>
    )
}