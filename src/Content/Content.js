import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
    state = {
        time: 12,
        displayTime: "2 to 3",
        roadLen: 61395,
        numDrivers: 24,
        avgSpeed: 40,
        numHours: 6,
        unit: "weeks"
    }

    changeRoadLen = value => {
        this.setState({
            roadLen: value,
            time: value * 24 / (this.state.avgSpeed * 168 * this.state.numDrivers * this.state.numHours),
            displayTime: Math.floor(value * 24 / (this.state.avgSpeed * 168 * this.state.numDrivers * this.state.numHours)) + " to " + Math.floor(value * 24 / (this.state.avgSpeed * 168 * this.state.numDrivers * this.state.numHours) + 1)
        });
    }

    changeNumDrivers = value => {
        this.setState({
            numDrivers: value,
            displayTime: Math.floor(this.state.roadLen * 24 / (this.state.avgSpeed * 168 * value * this.state.numHours)) + " to " + Math.floor(this.state.roadLen * 24 / (this.state.avgSpeed * 168 * value * this.state.numHours) + 1)
        });
    }

    changeAvgSpeed = value => {
        this.setState({
            avgSpeed: value,
            displayTime: Math.floor(this.state.roadLen * 24 / (value * 168 * this.state.numDrivers * this.state.numHours)) + " to " + Math.floor(this.state.roadLen * 24 / (value * 168 * this.state.numDrivers * this.state.numHours) + 1)
        });
    }

    changeNumHours = value => {
        this.setState({
            numHours: value,
            displayTime: Math.floor(this.state.roadLen * 24 / (this.state.avgSpeed * 168 * this.state.numDrivers * value)) + " to " + Math.floor(this.state.roadLen * 24 / (this.state.avgSpeed * 168 * this.state.numDrivers * value) + 1)
        });
    }
    render() {
        return (
            <div>
                {/* <p>This is the time: {this.state.displayTime} {this.state.unit}</p>
                <p>Total length of road: {this.state.roadLen} km</p>
                <input type="range" min="1" max="80000" value={this.state.roadLen} onChange={(e) => { this.changeRoadLen(e.target.value) }} />
                <p>Number of drivers: {this.state.numDrivers} </p>
                <input type="range" min="1" max="100" value={this.state.numDrivers} onChange={(e) => { this.changeNumDrivers(e.target.value) }} />
                <p>Number of hours driven per day: {this.state.numHours} hours</p>
                <input type="range" min="1" max="24" value={this.state.numHours} onChange={(e) => { this.changeNumHours(e.target.value) }} />
                <p>Average driving speed: {this.state.avgSpeed} km/hr</p>
                <input type="range" min="1" max="100" value={this.state.avgSpeed} onChange={(e) => { this.changeAvgSpeed(e.target.value) }} />
                <p></p> */}
                <p className="title">Locus Location Street Data Collection Time Estimation Tool</p>
                <div className="tableWrapper">
                    <table className="fl-table">
                        <tr>
                            <th>Variables</th>
                            <th>Base Case Value</th>
                            <th>Adjustment</th>
                        </tr>
                        <tr>
                            <td>Total Lenght of Road</td>
                            <td>61,395 km*</td>
                            <td>
                                {this.state.roadLen} km <br />
                                <input type="range" min="1" max="200000" value={this.state.roadLen} onChange={(e) => { this.changeRoadLen(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Number of Drivers</td>
                            <td>24</td>
                            <td>
                                {this.state.numDrivers}<br />
                                <input type="range" min="1" max="100" value={this.state.numDrivers} onChange={(e) => { this.changeNumDrivers(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td>No. of hours driven per day</td>
                            <td>6 hours</td>
                            <td>
                                {this.state.numHours} hour(s) <br />
                                <input type="range" min="1" max="24" value={this.state.numHours} onChange={(e) => { this.changeNumHours(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Average driving speed</td>
                            <td>40 km/hr</td>
                            <td>
                                {this.state.avgSpeed} km/hr <br />
                                <input type="range" min="1" max="100" value={this.state.avgSpeed} onChange={(e) => { this.changeAvgSpeed(e.target.value) }} />
                            </td>
                        </tr>
                        <tr>
                            <td>Total time</td>
                            <td>2 to 3 weeks</td>
                            <td className="result">{this.state.displayTime} {this.state.unit}</td>
                        </tr>
                    </table>
                </div>
                <div className="sources">
                    <p>* <a href="https://mof.gov.np/uploads/document/file/Economic%20Survey%202019_20201125024153.pdf" target="_blank">The Economic Survey 2019/20</a>, Ministry of Finance, Nepal | Pg. 111, Table 11 (d)</p>
                </div>
            </div>
        );
    }
}

export default Content;