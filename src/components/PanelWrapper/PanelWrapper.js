import React from 'react';
import Panel from '../Panel/Panel';

class PanelWrapper extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <Panel 
                bgImg="panelbg-1" 
                popupContent={
                    <div>

                    </div>
                }
                />
                <Panel text="Experiences" bgImg="panelbg-2"/>
                <Panel text="Skills" bgImg="panelbg-3"/>
                <Panel text="Achievements" bgImg="panelbg-4"/>
                <Panel text="My Stuff" bgImg="panelbg-5"/>
                <Panel bgImg="panelbg-6"/>
            </div>
        )
    }
}

export default PanelWrapper;