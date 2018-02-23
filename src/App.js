import React, { Component } from 'react'
import {
  Accordion,
  AccordionSection,
  actionTypes,
  actionsToMsg
} from 'react-accordion-composable'
import './App.css'

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      accordionMsg: actionsToMsg({
        type: actionTypes.selectIds,
        ids: ['1', '2']
      })
    }
  }

  accordionDispatch(actions) {
    this.setState({
      accordionMsg: actionsToMsg(actions)
    })
  }

  accordionOn() {
    console.log(`App: accordionOn()`)
    this.accordionDispatch({ type: actionTypes.accordionOn })
  }
  accordionOff() {
    console.log(`App: accordionOff()`)
    this.accordionDispatch({ type: actionTypes.accordionOff })
  }
  collapseAll() {
    console.log(`App: collapseAll()`)
    this.accordionDispatch({ type: actionTypes.collapseAll })
  }
  expandAll() {
    console.log(`App: expandAll()`)
    this.accordionDispatch({ type: actionTypes.expandAll })
  }
  select13() {
    console.log(`App: select13()`)
    this.accordionDispatch({ type: actionTypes.selectIds, ids: ['1', '3'] })
  }

  /**
   * Example of dispatching more then one actions at a time
   */
  select3_and_AccordionOff() {
    console.log(`App: select3_AccordionOn()`)
    this.accordionDispatch([
      { type: actionTypes.selectIds, ids: ['3'] },
      { type: actionTypes.accordionOff }
    ])
  }

  render() {
    return (
      <div className="App">
        <div className="LeftPart">
          <h3>Outside of Accordion</h3>

          <button type="button" onClick={() => this.accordionOn()}>
            Accordion On
          </button>

          {` : `}
          <button type="button" onClick={() => this.accordionOff()}>
            Accordion Off
          </button>
          {` : `}
          <button type="button" onClick={() => this.collapseAll()}>
            Collapse All
          </button>
          {` : `}
          <button type="button" onClick={() => this.expandAll()}>
            Expand All
          </button>
          {` : `}
          <button type="button" onClick={() => this.select13()}>
            Select 1 & 3
          </button>
          {` : `}
          <button type="button" onClick={() => this.select3_and_AccordionOff()}>
            Select 3 & Accordion Off
          </button>
          <p>
            these buttons are all outside of the Accordion. They send messages
            to Accordion component with list of actions to apply. These messages
            are dispatched through a prop.
          </p>
          <hr />

          <div className="Cnt">
            <h3>Accordion:</h3>
            <Accordion className="Accordion" msg={this.state.accordionMsg}>
              <AccordionSection className="AccordionSection" id="1">
                <h3 className="Element">Title 1 - a single element</h3>
                <p className="BodyElement">Body 1 - a single element</p>
              </AccordionSection>
              <AccordionSection className="AccordionSection" id="2">
                <h3 className="Element">Title 2</h3>
                <p className="BodyElement">Body 2</p>
              </AccordionSection>
              <AccordionSection className="AccordionSection" id="3">
                <div className="Element">
                  <div className="Flex Element">
                    <h3 className="Flex Element">Title 3</h3>
                    <h3 className="Flex Element"> - a complex element</h3>
                  </div>
                  <p className="Element">
                    having a second row. We are still inside the title part.
                  </p>
                </div>
                <p className="BodyElement">Body 3 - starts with 2nd Child</p>
                <p className="BodyElement">
                  continues with 3d Child
                  <br />
                  <br />
                  Lorem and Ipsum were here
                </p>
              </AccordionSection>
            </Accordion>
          </div>
        </div>
        <div className="RightPart">
          <h2>React-Accordion-Composable Demo</h2>
          <ul>
            <li>
              <a
                href="https://github.com/heroqu/react-accordion-composable-demo"
                target="_blank" rel="noopener noreferrer"
              >
                demo repo
              </a>
            </li>
            <li>
              <a
                href="https://github.com/heroqu/react-accordion-composable"
                target="_blank" rel="noopener noreferrer"
              >
                Accordion component repo
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-accordion-composable"
                target="_blank" rel="noopener noreferrer"
              >
                Accordion component npm
              </a>
            </li>
          </ul>

          <p>
            While Accordion works autonomously, still we can influence it from
            outside if we like.
          </p>
          <p>
            First two buttons switch `Accordion mode` On and Off. When in
            Accordion mode no more then one section can be expanded. Selecting
            other section would collapse previously expanded one. When Accordion
            mode is Off then all the sections behave independently and one can
            expand any number of sections.
          </p>
          <p>
            Last button is an example of sending a message with a list of 2
            actions: `Select section 3 (in whatever mode that is current)` and
            then `set Accordion mode to Off`. The order of actions is important.
            One can send any sequence of actions (=commands) to Accordion, but
            two should be enough to attain any state desired.
          </p>

          <p>
            Section 3 illustrates the fact that contents of both Title part and
            Body part are completely up to the user. The trick is that whatever
            is nested as the first child is being treated as the Title, and
            whatever goes as Child 2, Child 3 etc. - as the Body (which is the
            subject of expanding/collapsing). This is the reason for
            'composable' suffix of the name: Accordion is only responsible for
            showing and hiding stuff, while the stuff itself is whatever is
            nested inside.
          </p>
        </div>
      </div>
    )
  }
}

export default App
