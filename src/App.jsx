import { useState } from 'react'
import btnImage from '../src/assets/icon-arrow.svg';
import './App.css'

function App() {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  const birthDay = userInput.day;
  const birthMonth = userInput.month;
  const birthYear = userInput.year;
  

  function getAge()
  {
    var day = document.querySelector('.put-days');
    var month = document.querySelector('.put-months');
    var year = document.querySelector('.put-years');


    //set error message
    var errorInDay = document.querySelector('.error-message-day');
    var errorInMonth = document.querySelector('.error-message-month');
    var errorInYear = document.querySelector('.error-message-year');

    // Reset error messages
    errorInDay.innerHTML = "";
    errorInMonth.innerHTML = "";
    errorInYear.innerHTML = "";

    //get today date
    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth() + 1;
    var todayYear = today.getFullYear();

    // Validate input
    if (birthDay === "" || isNaN(parseInt(birthDay, 10)) || birthDay < 1 || birthDay > 31) 
    {
        errorInDay.innerHTML = "Must be a valid day";
    } 
    else 
    {
        if (todayDay < birthDay) 
        {
            day.innerHTML = todayDay - birthDay + 30;
            todayMonth = todayMonth - 1;
        } 
        else 
        {
            day.innerHTML = todayDay - birthDay;
        }
    }

    if (birthMonth === "" || isNaN(parseInt(birthMonth, 10)) || birthMonth < 1 || birthMonth > 12) 
    {
        errorInMonth.innerHTML = "Must be a valid month";
    } 
    else 
    {
        if (todayMonth < birthMonth) 
        {
            month.innerHTML = todayMonth - birthMonth + 12;
            todayYear = todayYear - 1;
        } 
        else 
        {
            month.innerHTML = todayMonth - birthMonth;
        }
    }

    if (birthYear === "" || isNaN(parseInt(birthYear, 10)) || birthYear > todayYear) 
    {
        errorInYear.innerHTML = "Must be a valid year";
    } 
    else 
    {
        year.innerHTML = todayYear - birthYear;
    }

  }

  return (
    <> 
      <div className="card">
        <div className="date">
          <div className="day-input">
            <label htmlFor="day">Day</label>
            <input value={userInput.day} onChange={handleChange} name="day" type="number" id="day" inputMode="numeric"  placeholder="DD"/>
            <div className="error error-message-day"></div>
          </div>
          <div className="month-input">
            <label htmlFor="month">Month</label>
            <input value={userInput.month} onChange={handleChange} name="month" type="number" id="month" inputMode="numeric"  placeholder="MM"/>
            <div className="error error-message-month"></div>
          </div>
          <div className="year-input">
            <label htmlFor="day">Year</label>
            <input value={userInput.year} onChange={handleChange} name="year" type="number" id="year" inputMode="numeric"  placeholder="YYYY"/>
            <div className="error error-message-year"></div>
          </div>      
        </div>
        <div className="submit-button">
          <hr/>
          <button type="button" className="btn" onClick={getAge}><img src={btnImage} alt=""/></button>
        </div>
        <div className="age-shower">
          <div className="years">
            <div className="put-years">- -</div>
            <div className="years-heading">&nbsp;years</div>
          </div>
          <div className="month">
            <div className="put-months">- -</div>
            <div className="months-heading">&nbsp;months</div>
          </div>
          <div className="days">
            <div className="put-days">- -</div>
            <div className="days-heading">&nbsp;days</div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
