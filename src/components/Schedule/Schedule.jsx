import {
  schedule,
  schedule__day,
  schedule__time,
} from "./Schedule.module.scss";
const Schedule = (props) => (
  <div className={schedule}>
    <p className={schedule__day}>{props.day}</p>
    <p className={schedule__time}>{props.time}</p>
  </div>
);
export default Schedule;
