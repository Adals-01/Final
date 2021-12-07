export default function Overview(props) {
  const unixtime = props.data.timestamp;
  var date = new Date(unixtime);
  const hour = date.getHours();

  return (
    <section className="overview">
      <h1>
        {/* <p> time: {props.data.timestamp}</p> */}
        {(() => {
          if (hour === 17 || hour === 18 || hour === 19 || hour === 20 || hour === 21 || hour === 22 || hour === 23 || hour === 24 || hour === 1 || hour === 2 || hour === 3 || hour === 4) {
            return <EveningGreeting />;
          } else if (hour === 12 || hour === 13 || hour === 14 || hour === 15 || hour === 16) {
            return <AfternoonGreeting />;
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

function MorningGreeting() {
  return "Good Morning";
}

function AfternoonGreeting() {
  return "Good Afternoon";
}
function EveningGreeting() {
  return "Good Evening";
}
