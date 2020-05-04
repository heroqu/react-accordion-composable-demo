import React, { useState } from 'react';
import {
  Accordion,
  AccordionSection,
  actionTypes,
  actionsToMsg,
} from 'react-accordion-composable';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    accordionMsg: actionsToMsg({
      type: actionTypes.selectIds,
      ids: ['1', '2'],
    }),
  });

  const accordionDispatch = actions =>
    setState({
      accordionMsg: actionsToMsg(actions),
    });

  return (
    <div className="App">
      <div className="Parts">
        <div className="Part PartFull">
          <h1>React-Accordion-Composable Demo</h1>
        </div>

        <div className="Part PartLeft">
          <h2>Accordion in action</h2>
          <p className="Highlight Petit">
            (click on the title part of any section and see the effect)
          </p>
          <Accordion className="Accordion" msg={state.accordionMsg}>
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
                  having a second row. We are still inside the title part that
                  never collapses.
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

        <div className="Part PartRight">
          <h2>Controlling Accordion from outside:</h2>
          <p className="Highlight">(click on a button and see the effect)</p>
          <div className="Button"
            onClick={() => accordionDispatch({ type: actionTypes.accordionOn })}
          >
            Accordion On
          </div>
          <div className="Explain">
            Turns ON the Accordion mode, when no more then one section can be in
            expanded state at any given time. Click this button when several
            sections are expanded and see that only the first of them stay
            expanded.
          </div>
          <div className="c-button"
            onClick={() =>
              accordionDispatch({ type: actionTypes.accordionOff })
            }
          >
            Accordion Off
          </div>
          <div className="Explain">
            Makes all the sections independent: from now on each section can be
            expanded / collapsed without affecting siblings.
          </div>
          <div className="Button"
            onClick={() => accordionDispatch({ type: actionTypes.collapseAll })}
          >
            Collapse All
          </div>
          <div className="Explain">
            Collapses all sections and turns Accordion mode ON
          </div>
          <div className="Button"
            onClick={() => accordionDispatch({ type: actionTypes.expandAll })}
          >
            Expand All
          </div>
          <div className="Explain">
            Expands all sections and turns Accordion mode OFF
          </div>
          <div className="Button"
            onClick={() =>
              accordionDispatch({
                type: actionTypes.selectIds,
                ids: ['1', '3'],
              })
            }
          >
            Select 1 & 3
          </div>
          <div className="Explain">
            Turns Accordion mode OFF and expands sections 1 and 3
          </div>
          <div className="Button"
            onClick={() =>
              accordionDispatch([
                //
                { type: actionTypes.selectIds, ids: ['3'] },
                { type: actionTypes.accordionOff },
              ])
            }
          >
            Select 3 & Accordion Off
          </div>
          <div className="Explain">
            Example of dispatching more then one action at a time: expand
            section 3 only then, as additional action, turn Accordion mode OFF.
          </div>

          <p>
            Note, that all the buttons are situated outside of the Accordion
            element. They <em>talk</em> to Accordion element by{' '}
            <strong>sending messages with lists of actions</strong> through the
            props.
          </p>
        </div>

        <div className="Part PartFull">
          <h2>Comments</h2>
          <p>
            While Accordion works autonomously, still we can influence it from
            outside if we like.
          </p>
          <p>
            First two buttons switch `Accordion mode` <strong>On</strong> and{' '}
            <strong>Off</strong>. When in Accordion mode no more then one
            section can be expanded. Selecting other section would collapse
            previously expanded one. When Accordion mode is Off then all the
            sections behave independently and one can expand any number of
            sections.
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

        <div className="Part PartFull">
          <h2>Links</h2>
          <ul>
            <li>
              <a
                href="https://github.com/heroqu/react-accordion-composable-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                demo repo
              </a>
            </li>
            <li>
              <a
                href="https://github.com/heroqu/react-accordion-composable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accordion component repo
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/react-accordion-composable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accordion component npm
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
