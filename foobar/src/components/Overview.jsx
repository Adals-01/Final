export default function Overview(props) {
  const unixtime = props.data.timestamp;
  var date = new Date(unixtime);
  const hour = date.getHours();
  console.log(hour);
  return (
    <section className="overview">
      <h1>
        {/* <p> time: {props.data.timestamp}</p> */}
        {(() => {
          if (hour === 12 || 13 || 14 || 15 || 16) {
            return <AfternoonGreeting />;
          } else if (hour === 17 || 18 || 19 || 20 || 21 || 22 || 23 || 24 || 1 || 2 || 3 || 4) {
            return <EveningGreeting />;
          } else {
            return <MorningGreeting />;
          }
        })()}
        , {props.data.bar && props.data.bar.name} Team!
      </h1>
      <div className="stats">
        <div className="statsItem">
          <div className="statNumber">?</div>
          <p> Orders Completed </p>
        </div>
        <div className="statsItem">
          <div className="statNumber">{props.data.queue && props.data.queue.length}</div>
          <p> Orders in Line</p>
        </div>
        <div className="statsItem">
          <div className="statNumber">{props.data.taps && props.data.taps.length}</div>
          <p> Beers on Tap </p>
        </div>
      </div>
    </section>
  );
}

function MorningGreeting(props) {
  return "Good Morning";
}

function AfternoonGreeting(props) {
  return "Good Afternoon";
}
function EveningGreeting(props) {
  return "Good Evening";
}
