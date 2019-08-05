import Main from './Main'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../redux/action'
import {withRouter} from 'react-router'
//هر جا نیاز به پراپ ها دشتیم و به دلیل تودر تو بودن کامپوننت ها پاس دادن
// پراپ سخت بود این فانکشن زیر رو مینویسم و با فانکشن اصلی کانکت میکنیم


function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(action, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
console.log("this is App");

export default App;