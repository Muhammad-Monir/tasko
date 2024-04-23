import BgImg from "../../assets/images/header-bg.png";
import ErrorImg from "../../assets/images/error.png";
import { Link } from "react-router-dom";
import AuthButton from "../Authentication/components/AuthButton";
const Error = () => {
  return (
    <section className="rest--pass--section">
      <div
        className="w-full h-[174px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>
      <div className="w-[1320px] main--content--wrapperV2 overflow-auto mx-auto -mt-[60px]">
        <div className="w-[580px] mx-auto py-[30px]">
          <img className="w-full h-[520px] object-cover" src={ErrorImg} alt="" />
          <Link to={'/'} className="mt-[50px] block">
                <AuthButton>
                Back To Home
                </AuthButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
