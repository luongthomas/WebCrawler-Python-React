import React from 'react'
import Form from '../../components/Form/Form'

const FormContainer = React.createClass({
  getInitialState() {
    return {
      link: '',
      searchType: 1,
    };
  },

  getValidationState() {
    const length = this.state.link.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.link });
  },

  handleSearchChange(event, index, searchType) {
    this.setState({searchType});
  },

  render () {
    return (
      <Form
        getValidationState={this.getValidationState}
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange} />
    )
  },
})
export default FormContainer
