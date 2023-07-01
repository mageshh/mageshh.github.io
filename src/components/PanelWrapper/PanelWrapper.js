import React from 'react';
import Panel from '../Panel/Panel';

class PanelWrapper extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <Panel 
                bgImg="panel-bg-1" 
                popupContent={
                    <div>

                    </div>
                }
                />
            </div>
        )
    }
}

export default PanelWrapper;