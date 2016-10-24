import React from 'react'
import { Link } from 'react-router'
import { DatePicker, TextInput } from 'belle'
import { Button, Colors } from 'react-foundation'

const Home = React.createClass({
  render () {
    return (
      <div>
        <h1>Welcome to Home</h1>
        <p>Feel free to explore around</p>
        <Link to='/pageone'>
          <button type='button' className='btn btn-lg btn-success'>
            Go to Page One
          </button>
        </Link>

        <DatePicker  />

        <div className="button-basics-example">
          <Link>Learn More</Link>
          <Link>View All Features</Link>
          <Button color={Colors.SUCCESS}>Save</Button>
          <Button color={Colors.ALERT}>Delete</Button>
        </div>

        <div>
          <TextInput defaultValue="Update here and see how the input grows …" />
        </div>
      </div>
    );
  },
});

export default Home
