import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination itemCount={80} pageSize={10} currentPage={3} />;
}
