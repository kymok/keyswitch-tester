import { connect } from 'react-redux'
import { addKeyswitch, showKeyswitch } from '../actions'
import KeyswitchDetail from '../components/KeyswitchDetail'

const maxSwitchCount = 10

const shouldEnableAddButton = (state) => {

    if (state.keyswitchList.keyswitches.length >= maxSwitchCount) {
        return {
            value: false,
            reason: '選択できるのは' + String(maxSwitchCount) + '個までです'
        }
    }

    const currentProductId = state.keyswitchDetail.productId;
    if (state.keyswitchList.keyswitches.some(item => item.productId === currentProductId)) {
        return {
            value: false,
            reason: '選択されています'
        };
    }
    
    if (currentProductId === '') {
        return {
            value: false,
            reason: 'スイッチを選択してください'
        };
    }    
    return {value: true};
}



const mapStateToProps = state => ({
    productId: state.keyswitchDetail.productId,
    enableAddButton: shouldEnableAddButton(state)
})

const mapDispatchToProps = dispatch => ({
    addKeyswitch: productId => dispatch(addKeyswitch(productId)),
    showKeyswitch: productId => dispatch(showKeyswitch(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyswitchDetail)