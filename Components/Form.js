import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.Method}>
                <input className='input' type='text' name='city' placeholder='Город' />
                <button className='button'>получить погоду</button>
            </form>
        )
    }
}