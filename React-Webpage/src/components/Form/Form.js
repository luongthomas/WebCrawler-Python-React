import React from 'react'
import {
  Button, ButtonGroup, DropdownButton, MenuItem,
  FormGroup, ControlLabel, HelpBlock, FormControl,
  Tooltip, OverlayTrigger,
} from 'react-bootstrap'

// import LoadingButton from '../LoadingButton/LoadingButton'
import SearchInfoModal from '../SearchInfoModal/SearchInfoModal'

const styles = {
  formContainer: {
    maxWidth: '60%',
    margin: '0 auto',
    marginTop: '5%'
  },
  centered: {
    textAlign: 'center',
  },
  inputFields: {
    display: 'block',
    width: '75%',
    margin: '0 auto',
  },

}

export default function Form (props) {

  const startSiteTooltip = (
    <Tooltip id="startSiteTooltip">
      {`The origin of the webcrawl, subsequent links will originate here.`}
    </Tooltip>
  );

  const depthTooltip = (
    <Tooltip id="depthTooltip">
      {`How deep would you like the crawler to travel?`}
    </Tooltip>
  );

  const keywordTooltip = (
    <Tooltip id="keywordTooltip">
      {`Crawler scans given word.  Search stops upon discovery of keyword.`}
    </Tooltip>
  );

  return (
    <div style={styles.formContainer}>

      <h4>{`Where would you like to start the crawl?`}</h4>
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={props.getValidationState()}
        >
          <ControlLabel>Web Crawler Information Input</ControlLabel>
          <OverlayTrigger placement="left" overlay={startSiteTooltip}>
            <FormControl
              type="text"
              placeholder="Staring Website"
              onChange={props.onChange}
            />
          </OverlayTrigger>
          <OverlayTrigger placement="left" overlay={depthTooltip}>
          <FormControl
            type="text"
            placeholder="Depth of Search"
          />
          </OverlayTrigger>
          <OverlayTrigger placement="left" overlay={keywordTooltip}>
          <FormControl
            type="text"
            placeholder="Optional Keyword"
          />
          </OverlayTrigger>
          <FormControl.Feedback />
          <HelpBlock>{`More information about search algorithms below.`}</HelpBlock>
        </FormGroup>
        <br />
        <br />
        <ButtonGroup bsSize='large'>
          <DropdownButton title="Type of Search" bsSize="large" bsStyle="info" id="dropdown-size-large">
            <MenuItem eventKey="1">{`Depth-First Search`}</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2">{`Breadth-First Search`}</MenuItem>
          </DropdownButton>
          <Button type='button' bsStyle="success">{`GO`}</Button>
        </ButtonGroup>
      </form>

      <br />
      <br />
      <SearchInfoModal />


    </div>
  )
}
