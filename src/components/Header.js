import PropTypes from 'prop-types'

import Button from './Button'

// 'rafce' snippet
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onAdd={onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker xD',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
