// import React from 'react';

// function Secondtest(props)
// {
//     console.log('props',props)
//     return (
//         <div>
//             Test :{props.data}
//         </div>
//     );
// }

// export default React.memo(Secondtest);

import React, { Component,memo } from 'react'

class Secondtest extends Component {
  render() {
    console.log('props',this.props);
    return (
      <div>
        Test: {this.props.data}
      </div>
    )
  }
}
export default memo(Secondtest)
