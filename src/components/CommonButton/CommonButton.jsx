import PropTypes from "prop-types";
export default function CommonButton({ icon, text, bGcolor="#60E5AE", color="#1F1F1F" }) {
  return (
    <button
    style={{
      backgroundColor: bGcolor,
      color: color
    }}
      className={`flex items-center ${
        icon ? "gap-[10px]" : ""
      } py-[12px] justify-center w-full block rounded-[8px] font-semibold capitalize leading-[27px]`}
    >
      <img src={icon} alt="" />
      {text}
    </button>
  );
}

CommonButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
