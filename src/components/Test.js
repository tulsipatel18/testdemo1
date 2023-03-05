// import React from 'react';

// function use react-memo
// function Test(props) {
//     console.log('props',props);
//     return (
//         <div>
//             Test: {props.data}
//         </div>
//     );
// }

// export default React.memo(Test);


//class use in purecomponent
import React, { Component,PureComponent,memo } from 'react'

 class Test extends Component {
  render() {
    console.log('props',this.props);
    return (
      <div>
        Test: {this.props.data}
      </div>
    )
  }
}
export default memo(Test);