import React, {Component} from 'react'

export default class DaySelect extends Component {
  constructor(props) {
    super(props)

  }

  handleWeekDaySelect(e) {
    let parent = e.target
    while (parent && parent.classList.value != 'weekday') {
      parent = parent.parentElement
    }
    let day = parseInt(parent.childNodes[0].childNodes[1].value)

    this.props.handleWeekdaySelect(day)
  }
 


  render() {
    
    return (
      <div className='day-select-wrap'>
        <ol className='dayPicker'>
          <li className='weekday' onClick={(e)=>this.handleWeekDaySelect(e)}>
            <label>
              <span className='day-label' data-key='0'>Do</span>
              <input hidden name='weekday[]' type='checkbox' value='0'/>
            </label>
          </li>
          <li className='weekday'>
            <label>
              <span className='day-label' data-key='1'>Lu</span>
              <input hidden name='weekday[]' type='checkbox' value='1'/>
            </label>
          </li>
          <li className='weekday'>
            <label>
              <span className='day-label' data-key='2'>Ma</span>
              <input hidden name='weekday[]' type='checkbox' value='2'/>
            </label>
          </li>
          <li className='weekday'>
            <label>
              <span className='day-label' data-key='3'>Mi</span>
              <input hidden name='weekday[]' type='checkbox' value='3'/>
            </label>
          </li>
          <li className='weekday'>
            <label>
              <span className='day-label' data-key='4'>Ju</span>
              <input hidden name='weekday[]' type='checkbox' value='4'/>
            </label>
          </li>
          <li className='weekday' data-key='5'>
            <label>
              <span className='day-label'>Vi</span>
              <input hidden name='weekday[]' type='checkbox' value='5'/>
            </label>
          </li>
          <li className='weekday' data-key='6'>
            <label>
              <span className='day-label'>Sa</span>
              <input hidden name='weekday[]' type='checkbox' value='6'/>
            </label>
          </li>
        </ol>
      </div>
      )
  }

}