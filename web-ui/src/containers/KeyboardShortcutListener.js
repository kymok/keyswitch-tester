import React from 'react'
import { connect } from 'react-redux'
import { handleKeystroke } from '../actions'


class KeyboardShortcutListener extends React.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeystroke);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeystroke);
    }

    handleKeystroke = (event) => {
        this.props.handleKeystroke(event.keyCode);
    }

    render() {
        return (null);
    }
}


const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    handleKeystroke: keystroke => dispatch(handleKeystroke(keystroke))
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardShortcutListener);