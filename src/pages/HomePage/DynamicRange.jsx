import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const DynamicRange = ({ range, setRange }) => {
  return (
    <div>
      <h3>
        Price range: {range[0]} - {range[1]}
      </h3>
      <Slider
        range
        min={0}
        max={1000} //todo 1000 load max price from database
        value={range}
        onChange={(newRange) => setRange(newRange)}
        allowCross={false}
        trackStyle={[{ backgroundColor: "#0C99D7" }]}
        handleStyle={[
          { borderColor: "#000000", backgroundColor: "#fff" },
          { borderColor: "#000000", backgroundColor: "#fff" },
        ]}
        railStyle={{ backgroundColor: "#ccc" }}
      />
    </div>
  );
};

export default DynamicRange;
