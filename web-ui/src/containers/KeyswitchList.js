import { connect } from 'react-redux'
import KeyswitchList from '../components/KeyswitchList'
import { removeKeyswitch, printKeyswitchList, removeAllKeyswitches } from '../actions'

const mapStateToProps = state => ({
    keyswitches: state.keyswitchList.keyswitches,
    isPrinterBlocked: state.printer.isBlocked
})

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeKeyswitch(id)),
    removeAll: () => dispatch(removeAllKeyswitches()),
    printList: ids => dispatch(printKeyswitchList(ids))
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyswitchList)

