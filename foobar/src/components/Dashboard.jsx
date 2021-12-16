import logo from "../assets/foobar-logo.svg";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Overview from "../components/Overview";
import StorageList from "../components/StorageList";
import TapList from "../components/TapList";
import QueueList from "../components/QueueList";
import ServingList from "../components/ServingList";

export default function Dashboard(props) {
  return (
    <main className="dashboard-main">
      <aside>
        <h2>Taps</h2>
        {props.data.taps && <TapList taps={props.data.taps} />}
      </aside>
      <div className="right-side">
        <div className="overview-logo">
          <Overview data={props.data} ordersCompleted={props.ordersCompleted} />
          <img className="foobar-logo" src={logo} alt={"foobar-logo"} />
        </div>
        <h2>Orders</h2>
        <SimpleBar style={{ maxWidth: '70vw'  }}>
        <div className="serving-and-queue">
          {props.data.serving && <ServingList serving={props.data.serving} bartenders={props.data.bartenders} />}
          {props.data.queue && <QueueList queue={props.data.queue} />}
        </div>
        </SimpleBar>
        <h2>Storage</h2>
        {props.data.storage && <StorageList storages={props.data.storage} />}
      </div>
    </main>
  );
}
