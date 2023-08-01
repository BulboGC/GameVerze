//styles
import covers from "../styles/covers.module.scss";
import text from "../styles/text.module.scss";
import Card from "./Card";

export default function About() {
  return (
    <div className="flex align-center justify-center my-10 mr-3 md:mr-0">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
