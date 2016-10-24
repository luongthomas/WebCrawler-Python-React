import React from 'react'
import Form from '../../components/Form/Form'

const FormContainer = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render () {
    return (
      <Form
        getValidationState={this.getValidationState}
        onChange={this.handleChange}/>
    )
  },
})
export default FormContainer
