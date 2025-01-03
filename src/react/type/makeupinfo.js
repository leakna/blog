import "../../css/type/makeup/softmakeup.css";
import useFetch from "../fetch";
const MakeUpInfo = ({ title, urlname }) => {
  const { data, pend, error } = useFetch("http://localhost:5000/data");
  const mainSteps = data?.[0]?.makeup?.[urlname]?.detail?.mainstep;
  const steps = data?.[0]?.makeup?.[urlname]?.detail?.step;
  const img = data?.[0]?.makeup?.[urlname]?.image;
  return (
    <div>
      <div className="groupOfInfo">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="groupText">
          <h1>{title}</h1>
          {mainSteps &&
            mainSteps.map((item, i) => (
              <p>
                <b>{mainSteps[i]}</b>
                {steps[i]}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MakeUpInfo;
