export default function GetTime(props) {
  const unixtime = props.starttime;
  const formatteddate = new Date(unixtime).toLocaleDateString("en-GB");

  var date = new Date(unixtime);
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var time = hour + ":" + min + ":" + sec;
  return (
    <div className="dateTime">
      <p>{formatteddate}</p>
      <p>{time}</p>
    </div>
  );
}
