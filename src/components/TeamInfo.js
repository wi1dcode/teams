import React from 'react'

class TeamInfo extends React.Component {
  render() {
    return (
        <>
        
            <div className="g-4 cards">
                <div className="col">
                    <div className="card h-100">
                        <img src={this.props.picture} className="card-img-top cards_image" />
                            <div className="card-body">
                            <h5 className="card-title">{this.props.nameShort}</h5>
                            <p className="card-text">Stade: {this.props.stade}</p>
                            <p className="card-text">Address: {this.props.address}</p>
                            <p className="card-text">Email: {this.props.email}</p>
                            <p className="card-text">Tel: {this.props.tel}</p>
                            </div>
                            <div className="card-footer">
                            <small>Founded: {this.props.founded}</small>
                            </div>
                        </div>
                </div>
            </div>
        
        </>
    )
  }
}

export default TeamInfo 