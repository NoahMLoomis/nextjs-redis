import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm"


export default function Home() {
  return (
    <div className="p-4">
      <h1>Create your car!</h1>
      <CarForm />
      <SearchForm />
    </div>
  )
}