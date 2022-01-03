import PropTypes from 'prop-types'

import Button from './Button'

// 'rafce' snippet
const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello'></Button>
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
