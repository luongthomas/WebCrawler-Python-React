import React from 'react'
import Form from '../../components/Form/Form'
import { startCrawler } from '../../utils/api'

const FormContainer = React.createClass({
  getInitialState() {
    return {
      url: '',
      searchType: 'BFS',
      keyword: '',
      maxPages: 1,
    };
  },

  getValidationState() {
    const length = this.state.url.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
  },

  handleUrlChange(e) {
    this.setState({ url: e.target.value })
  },

  handleKeywordChange(e) {
    this.setState({ keyword: e.target.value })
  },

  handleMaxPagesChange(e) {
    this.setState({ maxPages: e.target.value })
  },

  handleSearchTypeChange(event, index, searchType) {
    this.setState({searchType: event.target.value})
  },

  sendCookie(e) {
    e.preventDefault()
    console.log(startCrawler(
      this.state.url,
      this.state.maxPages,
      this.state.keyword,
      this.state.searchType)
    )
    console.log('sending cookie..?')
  },

  handleSubmit(e) {
    e.preventDefault()
    //console.log(this.state)
    document.cookie = `${'url=' + this.state.url}`
    document.cookie = `${'keyword=' + this.state.keyword}`
    document.cookie = `${'maxPages=' + this.state.maxPages}`
    document.cookie = `${'searchType=' + this.state.searchType}`

    console.log(typeof(this.state.maxPages))
    console.log(document.cookie)
    // console.log('The cookie is: ' + document.cookie)

    // let cookieStr = `${'url=' + this.state.url + ';'}`
    // cookieStr += `${'keyword=' + this.state.keyword + ';'}`
    // cookieStr += `${'maxPages=' + this.state.maxPages + ';'}`
    // cookieStr += `${'searchType=' + this.state.searchType + ';'}`
    //
    // console.log('cookieStr is: '  + cookieStr)
    //
    // document.cookie = cookieStr
    //
    // console.log('The cookie is: ' + document.cookie)
  },

  render () {
    return (
      <Form
        getValidationState={this.getValidationState}
        onUrlChange={this.handleUrlChange}
        onKeywordChange={this.handleKeywordChange}
        onMaxPagesChange={this.handleMaxPagesChange}
        onSearchTypeChange={this.handleSearchTypeChange}
        onSubmit={this.handleSubmit}
        sendCookie={this.sendCookie}/>
    )
  },
})
export default FormContainer
