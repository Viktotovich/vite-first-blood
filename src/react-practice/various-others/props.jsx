/*eslint-disable*/
import { getImageUrl } from "./utils.js";

//missing in props validation ??
function Profile({ name, imgURL, profession, awards, awardType, discovery }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img src={imgURL} alt={name} width={70} height={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards}</b>({awardType})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imgURL={getImageUrl("szV5sdG")}
        profession={"physicist and chemist"}
        awards={"4"}
        awardType={
          "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        }
        discovery={"polonium (chemical element)"}
      ></Profile>

      <Profile
        name={"Katsuko Saruhashi"}
        imgURL={getImageUrl("YfeOqp2")}
        profession={"geochemist"}
        awards={"2"}
        awardType={"Miyake Prize for geochemistry, Tanaka Prize"}
        discovery={"a method for measuring carbon dioxide in seawater"}
      ></Profile>
    </div>
  );
}
