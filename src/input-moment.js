import cx from 'classnames';
import moment from 'moment';
import React, { Component } from 'react';
import Calendar from './calendar';
import Time from './time';
import { Button } from 'reactstrap';


export default class InputMoment extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  static defaultProps = {
    prevMonthIcon: 'ion-ios-arrow-left',
    nextMonthIcon: 'ion-ios-arrow-right',
    minStep: 1,
    hourStep: 1,
    timePicker:true
  };

  state = {
    tab: 0
  };

  handleClickTab = (e, tab) => {
    e.preventDefault();
    this.setState({ tab: tab });
  };

  handleSave = e => {
    e.preventDefault();
    if (this.props.onSave) this.props.onSave();
  };
  onChange(m) {
    if (!this.props.timePicker) {
      m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    }
    this.props.onChange(m);
  }

  render() {
    const { tab } = this.state;
    const {
      moment: m,
      className,
      prevMonthIcon,
      nextMonthIcon,
      minStep,
      hourStep,
      onSave,
      timePicker,
      ...props
    } = this.props;
    const cls = cx('m-input-moment', className);

    return (
      <div className={cls} >
        {this.props.timePicker ? <div className="options">
          <button
            type="button"
            className={cx('ion-calendar im-btn', { 'is-active': tab === 0 })}
            onClick={e => this.handleClickTab(e, 0)}
          >
            Date
          </button>
         <button
            type="button"
            className={cx('ion-clock im-btn', { 'is-active': tab === 1 })}
            onClick={e => this.handleClickTab(e, 1)}
          >
            Time
          </button> 
        </div>: null}

        <div className="tabs">
          <Calendar
            className={cx('tab', { 'is-active': tab === 0 })}
            moment={m}
            onChange={this.onChange}
            prevMonthIcon={this.props.prevMonthIcon}
            nextMonthIcon={this.props.nextMonthIcon}
          />
          <Time
            className={cx('tab', { 'is-active': tab === 1 })}
            moment={m}
            minStep={this.props.minStep}
            hourStep={this.props.hourStep}
            onChange={this.props.onChange}
          />
        </div>

        {this.props.onSave ? (
          <Button
            type="button"
            color="primary"
            className="im-btn btn-save"
            onClick={this.handleSave}
          >
            {this.props.children ? this.props.children : 'Save'}
          </Button>
        ) : null}
      </div>
    );
  }
}
