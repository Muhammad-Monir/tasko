import SmallCommonButton from "../CommonButton/SmallCommonButton";
import PropTypes from "prop-types";
import defaultProfile from "../../assets/images/default-profile.png";
import moment from "moment";
function RequestCard({ singleRequest }) {
  return (
    <div className="flex  lg:items-center justify-between py-4 px-[22px] flex-col lg:flex-row gap-3 lg:gap-0 ">
      <div className="flex items-center gap-[14px]">
        <img
          className="h-[48px] w-[48px] object-cover rounded-full"
          src={
            singleRequest.img
              ? `data:image/jpeg;base64,${singleRequest.img}`
              : defaultProfile
          }
          alt=""
        />
        <div>
          <h3 className="text-base font-semibold text-headingColor">
            {singleRequest.friendName}
          </h3>
          <p className="text-paraLight text-[14px] mt-1.5">
            {" "}
            {moment(singleRequest.createTime).fromNow()}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <SmallCommonButton text="Accept" />
        <SmallCommonButton
          text="Reject"
          bGcolor="rgba(255, 76, 36, 0.15)"
          color="#FF4C24"
        />
      </div>
    </div>
  );
}

RequestCard.propTypes = {
  singleRequest: PropTypes.object,
};

export default RequestCard;
