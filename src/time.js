import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';
import moment from 'moment'

function r(el, deg) {
  if (el) {
    el.setAttribute('transform', 'rotate(' + deg + ' 50 50)');
  }
}
function set(m, hour, min) {
  r(min, 6 * m.minutes())
  r(hour, 30 * (m.hours() % 12) + m.minutes() / 2)
}
export default class Time extends Component {
  constructor(props) {
    super(props);
    this.mins = React.createRef();
    this.hours = React.createRef();
  }


  changeHours = pos => {
    const m = this.props.moment;
    m.hours(pos.x);
    set(m, this.hours.current, this.mins.current);
    this.props.onChange(m);
  };

  changeMinutes = pos => {
    const m = this.props.moment;
    m.minutes(pos.x);
    set(m, this.hours.current, this.mins.current);
    this.props.onChange(m);
  };




  render() {
    const m = this.props.moment;
    set(m, this.hours.current, this.mins.current);
    return (
      <div className={cx('m-time', this.props.className)}>


        <div className="showtime">
          <div className="analog">
            <svg id="clock" viewBox="0 0 100 100">
              <circle id="face" cx="50" cy="50" r="45" />
              <g id="hands">
                <rect id="hour" ref={this.hours} x="48.5" y="12.5" width="5" height="40" rx="2.5" ry="2.55" />
                <rect id="min" ref={this.mins} x="48" y="12.5" width="3" height="40" rx="2" ry="2" />
              </g>
            </svg>
          </div></div>
        <div className="showtime">
          <span className="time">{m.format('HH')}</span>
          <span className="separater">:</span>
          <span className="time">{m.format('mm')}</span>
        </div>


        <div className="sliders">
          <div className="time-text">Minutes:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={59}
            xstep={this.props.minStep}
            x={m.minute()}
            onChange={this.changeMinutes}
          />

          <div className="time-text">Hours:</div>
          <InputSlider
            className="u-slider-time"
            xmin={0}
            xmax={23}
            xstep={this.props.hourStep}
            x={m.hour()}
            onChange={this.changeHours}
          />

        </div>
      </div>
    );
  }
}
