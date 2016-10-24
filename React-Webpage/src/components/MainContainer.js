import React from 'react'
import { Pager } from 'react-bootstrap'


function MainContainer(props) {
  return (
    <div className='col-sm-12 text-center'>
      <div >
        {props.children}
      </div>

      <Pager>
          <Pager.Item previous href="#">&larr; Previous Page</Pager.Item>
          <Pager.Item next href="#" disabled>Next Page &rarr;</Pager.Item>
      </Pager>
    </div>
  );
}

export default MainContainer
