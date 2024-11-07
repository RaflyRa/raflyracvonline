
import Hero from "./components/hero";
import PersonalInfo from "./components/personalinfo";
import RowRiwayatPekerjaan from "./components/riwayatpekerjaan";
import RowRiwayatPendidikan from "./components/riwayatpendidikan";
import Skill from "./components/skill";
import "./style.css";
import HobbiesGallery from "./components/hobby";
import ContactForm from "./components/formkontak";
import Rating from "./components/formkontak";





export default function CVonline() {
  return (
    <section>
      <Hero/>
      <PersonalInfo/>
      <RowRiwayatPekerjaan/>
      <RowRiwayatPendidikan/>
      <Skill/>
      <HobbiesGallery/>
      <ContactForm/>
      <Rating/>
    </section>
  );
}