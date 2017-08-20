import React, {Component} from 'react'

export default class DaySelect extends Component {
  constructor(props) {
    super(props)

  }

  handleWeekDaySelect(e) {
    let parent = e.target
    while (parent && !parent.classList.value.includes('weekday') ) {
      parent = parent.parentElement
    }
    let day = parseInt(parent.childNodes[0].childNodes[1].value)

    this.props.handleWeekdaySelect(day)
  }
 


  render() {
    
    return (
      <div className='day-select-wrap'>
        <ol className='dayPicker'>
          <li className={this.props.days.includes(0) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Do</span>
              <input hidden name='weekday[]' type='checkbox' value='0'/>
            </label>
          </li>
          <li className={this.props.days.includes(1) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Lu</span>
              <input hidden name='weekday[]' type='checkbox' value='1'/>
            </label>
          </li>
          <li className={this.props.days.includes(2) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Ma</span>
              <input hidden name='weekday[]' type='checkbox' value='2'/>
            </label>
          </li>
          <li className={this.props.days.includes(3) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Mi</span>
              <input hidden name='weekday[]' type='checkbox' value='3'/>
            </label>
          </li>
          <li className={this.props.days.includes(4) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Ju</span>
              <input hidden name='weekday[]' type='checkbox' value='4'/>
            </label>
          </li>
          <li className={this.props.days.includes(5) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Vi</span>
              <input hidden name='weekday[]' type='checkbox' value='5'/>
            </label>
          </li>
          <li className={this.props.days.includes(6) ? 'weekday active' : 'weekday'} onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' onClick={(e)=>this.handleWeekDaySelect(e)}>Sa</span>
              <input hidden name='weekday[]' type='checkbox' value='6'/>
            </label>
          </li>
        </ol>
      </div>
      )
  }

}