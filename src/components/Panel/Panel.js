import React from 'react';
import './Panel.css';
import exitIcon from '../../assets/exitIcon.png';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openStatus: false
        };
    }

    handlePanelClick = () => {
        this.setState({ openStatus: true });
    }

    handlePanelClose = () => {
        this.setState({ openStatus: false });
    }

    render() {
        const { openStatus } = this.state;
        const { text, bgImg, popupContent } = this.props;

        return (
            <div className={`panel-container ${openStatus ? 'open' : ''} ${bgImg}`} 
            onClick={this.handlePanelClick}>
                <div className='box-text'>{text}</div>
                {openStatus && (<div className="popup" onClick={e => e.stopPropagation()}>
                    <span className="panel-exit" onClick={this.handlePanelClose}><img src={exitIcon} alt="Exit" 
                    style={{ width: '30px', height: '30px' }}/></span>
                    <div className="popup-content">
                        {popupContent}
                    </div>
                </div>
                )}
            </div>   
        );
    }
}

export default Panel;