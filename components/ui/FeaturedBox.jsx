import styled from "styled-components";
import Image from "next/image";
import BlueButtonOutline from "@/components/ui/BlueButtonOutline";

const FeaturedBox = (props) => {
  const { image, sm_img, user_img, user_name, items } = props.fdata;
  return (
    <FBox>
      <div className="img-area">
        <div className="img-main">
          <Image src={image} alt="featured img" />
        </div>
        <div className="img-col">
          {sm_img.map((e, idx) => {
            return <Image src={e} alt="featured img" key={idx + ""} />;
          })}
        </div>
      </div>
      <div className="bottom-area">
        <h2 className="dm-sans">Amazing Collection</h2>
        <div className="user-area">
          <div className="user">
            <Image src={user_img} alt="User Img" />
            <p className="dm-sans">by {user_name}</p>
          </div>
          <BlueButtonOutline
            text={`Total ${items} items`}
            fontFamily="dm-sans"
            font-size="12"
          />
        </div>
      </div>
    </FBox>
  );
};

export default FeaturedBox;

const FBox = styled.div`
  .img-area {
    display: flex;
    margin-top: 60px;
    .img-main {
      width: 70%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .img-col {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 5%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .bottom-area {
    margin-top: 20px;
    h2 {
      font-size: 20px;
      font-weight: 700;
    }
    .user-area {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      .user {
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
      }
    }
  }
`;
