import PropTypes from "prop-types";
export default function CommonButton({ icon, text }) {
  return (
    <button className="flex items-center gap-[10px] py-[12px] px-[45px] bg-primaryColor rounded-[8px] font-semibold capitalize leading-[27px]">
      <img src={icon} alt="" />
      {text}
    </button>
  );
}

CommonButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
