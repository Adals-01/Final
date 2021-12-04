import StorageItem from "./StorageItem";

export default function StorageList(props) {
  const storageArr = props.storages.map((storage, index) => <StorageItem key={index} {...storage} />);
  return <section className="storage-list">{storageArr}</section>;
}
