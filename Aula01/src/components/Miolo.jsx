import Img from "../../public/moica.png";
import './css/Miolo.module.css'

export default function Miolo() {
  return (
    <section>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae
          minima ipsam neque incidunt inventore provident temporibus eligendi
          sit fuga, praesentium exercitationem earum eaque aspernatur sint cum
          quas facere unde.
        </p>
      </div>
      <div>
        <img src={Img} alt="" />
      </div>
    </section>
  );
}
