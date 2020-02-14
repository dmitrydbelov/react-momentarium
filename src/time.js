import cx from 'classnames';
import React, { Component } from 'react';
import InputSlider from 'react-input-slider';
import moment from 'moment'
import { Input } from 'reactstrap';

function r(el, deg) {
  if (el) {
    el.setAttribute('transform', 'rotate(' + deg + ' 217.8 217.92)');
  }
}
function set(m, hour, min) {
  r(min, 6 * m.minutes())
  r(hour, (30 * (m.hours() % 12) + m.minutes() / 2) + 1)
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


            <svg id="clock" className="clock" rulerOrigin="0 0" viewOrigin="77.0449 696.6963" space="preserve" pageBounds="0 841.8896 595.2754 0" viewBox="0 0 434.869 434.87" overflow="visible">
              <g extraneous="self">
                <g>

                  <g>
                    <path d="m217.44 401.5v28.53" />
                    <path d="m212.44 401.5v28.53c0 6.448 10 6.448 10 0v-28.53c0-6.44-10-6.44-10 0z" />
                  </g>

                  <g>
                    <path d="m126.24 377.12l-15.109 24.47" />
                    <path d="m121.93 374.6c-5.036 8.156-10.073 16.313-15.109 24.47-3.398 5.503 5.254 10.521 8.635 5.047 5.036-8.156 10.073-16.313 15.109-24.47 3.39-5.51-5.26-10.53-8.64-5.05z" />
                  </g>

                  <g>
                    <path d="m58.029 308.99l-24.75 14.748" />
                    <path d="m55.506 304.67l-24.75 14.748c-5.533 3.297-0.506 11.944 5.047 8.635l24.75-14.748c5.532-3.3 0.506-11.95-5.047-8.64z" />
                  </g>

                  <g>
                    <path d="m32.931 217.44h-28.095" />
                    <path d="m32.931 212.44h-28.095c-6.449 0-6.449 10 0 10h28.095c6.449 0 6.449-10 0-10z" />
                  </g>

                  <g>
                    <path d="m58.39 125.09l-25.11-13.952" />
                    <path d="m60.913 120.77c-8.37-4.651-16.74-9.301-25.11-13.952-5.642-3.135-10.684 5.503-5.047 8.635 8.37 4.651 16.74 9.301 25.11 13.952 5.642 3.13 10.684-5.51 5.047-8.64z" />
                  </g>

                  <g>
                    <path d="m124.81 57.492l-13.67-24.212" />
                    <path d="m129.12 54.968c-4.557-8.071-9.114-16.141-13.671-24.211-3.17-5.614-11.81-0.576-8.635 5.047 4.557 8.071 9.114 16.141 13.671 24.211 3.17 5.614 11.81 0.576 8.63-5.047z" />
                  </g>

                  <g>
                    <path d="m217.44 33v-28.163" />
                    <path d="m222.44 33v-28.163c0-6.449-10-6.449-10 0v28.163c0 6.449 10 6.449 10 0z" />
                  </g>

                  <g>
                    <path d="m310.24 58.288l13.494-25.008" />
                    <path d="m314.56 60.812c4.498-8.336 8.996-16.672 13.494-25.008 3.062-5.674-5.572-10.723-8.635-5.047-4.498 8.336-8.996 16.672-13.494 25.008-3.07 5.674 5.57 10.723 8.63 5.047z" />
                  </g>

                  <g>
                    <path d="m376.84 125.88l24.75-14.749" />
                    <path d="m379.36 130.2c8.25-4.917 16.5-9.833 24.75-14.749 5.532-3.297 0.507-11.944-5.047-8.635-8.25 4.917-16.5 9.833-24.75 14.749-5.53 3.29-0.5 11.94 5.05 8.63z" />
                  </g>

                  <g>
                    <path d="m401.44 217.44h28.598" />
                    <path d="m401.44 222.44h28.598c6.448 0 6.448-10 0-10h-28.598c-6.45 0-6.45 10 0 10z" />
                  </g>

                  <g>
                    <path d="m377.2 309.8l24.39 13.93" />
                    <path d="m374.68 314.12c8.13 4.644 16.26 9.286 24.39 13.93 5.608 3.203 10.645-5.438 5.047-8.635-8.13-4.644-16.26-9.286-24.39-13.93-5.61-3.21-10.65 5.43-5.05 8.63z" />
                  </g>

                  <g>
                    <path d="m309.52 376.3l14.211 25.288" />
                    <path d="m305.21 378.83c4.737 8.43 9.474 16.859 14.211 25.288 3.159 5.621 11.798 0.581 8.635-5.047-4.737-8.43-9.474-16.858-14.211-25.288-3.17-5.62-11.81-0.58-8.64 5.05z" />
                  </g>

                  <g>
                    <path d="m218.59 217.18h-0.701" />
                    <path d="m218.59 204.68h-0.701c-6.814 0-12.5 5.686-12.5 12.5s5.686 12.5 12.5 12.5h0.701c6.814 0 12.5-5.686 12.5-12.5s-5.69-12.5-12.5-12.5z" />
                  </g>

                  <g ref={this.hours}  >
                    <path className="hours" d="m217.8 217.92v-112" />
                    <path className="hours" d="m220.3 217.92v-112c0-3.224-5-3.224-5 0v112c0 3.23 5 3.23 5 0z" />
                  </g>

                  <g ref={this.mins} >
                    <path className="mins" d="m217.8 217.92v-150" />
                    <path className="mins" d="m220.3 217.92v-150c0-3.224-5-3.224-5 0v150c0 3.23 5 3.23 5 0z" />
                  </g>
                </g>
              </g >
            </svg >
          </div>
        </div>
        <div className="showtime">
          <Input type="number" min={0} max={23} className="time" value={m.format('HH')} onChange={e => {
            e.preventDefault();
            const m = this.props.moment;
            m.hours(Number(e.target.value));
            set(m, this.hours.current, this.mins.current);
            this.props.onChange(m);
          }} />
          <span className="separater">:</span>
          <Input type="number" className="time" min={0} max={59} value={m.format('mm')} onChange={e => {
            e.preventDefault();
            const m = this.props.moment;
            m.minutes(Number(e.target.value));
            set(m, this.hours.current, this.mins.current);
            this.props.onChange(m);
          }} />/>
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
