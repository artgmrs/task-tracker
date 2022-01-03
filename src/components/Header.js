// 'rafce' snippet
const Header = ({ title }) => {
    return (
        <div>
            <h1>Task tracker {title} </h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker xD',
}

export default Header
