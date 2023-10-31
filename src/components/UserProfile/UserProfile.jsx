import styled from "styled-components";
import user_profile_img from "../../assets/imgs/userprofile.png";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../features/user/userSlice";

const USER_PROFILE_MAIN = styled.main`
  box-sizing: border-box;
  padding-block: 5.5rem;
  /* pb 88px */
  width: 100%;
  height: auto;
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  .user-profile-left {
    box-sizing: border-box;
    padding-right: 1.875rem;
    /* pr 30px */
    width: 40%;
    height: 100%;
    .img-box {
      width: fit-content;
      float: right;
      display: flex;
      flex-direction: column;
      align-items: center;
      figure {
        width: 6.25rem;
        height: 6.25rem;
        /* 100px */
        margin-bottom: 0.625rem;
        /* mb 10px */
        img {
          float: left;
          width: 100%;
          border-radius: 50%;
          box-shadow: 0 0 9px rgba(0, 0, 0, 0.7);
        }
      }
      span {
        font-weight: 600;
      }
    }
    @media screen and (max-width: 576px) {
      padding: 0;
      display: flex;
      justify-content: center;
    }
  }
  .user-profile-right {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 1.875rem;
    /* pl 30px */
    @media screen and (max-width: 576px) {
      padding-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h2 {
      margin-top: 0;
      margin-bottom: 3.125rempx;
      /* mb 50px */
      font-size: 28px;
      @media screen and (max-width: 576px) {
        margin-bottom: 0.625rem;
        /* mb 10px */
      }
    }
    span {
      font-style: italic;
      font-size: 13px;
      font-weight: 500;
      display: block;
      margin-bottom: 0.625rem;
    }
    form {
      max-width: 15.625rem;
      /* 250px */
      display: flex;
      flex-direction: column;
      .empty-input {
        border: 1px solid red;
        outline: 3px solid #ffe3e3;
      }
      label {
        font-size: 14px;
        font-weight: 500;
      }
      input {
        margin-bottom: 7px;
        border-radius: 0.25rem;
        /* br 4px */
        height: 1.5rem;
        /* h 24px */
        border: none;
        border: 1px solid #949494;
        text-align: justify;
        padding-left: 0.5rem;
        &:focus {
          background-color: #f7feff;
        }
        &:focus-visible {
          border: 1px solid #007185;
          outline: 3px solid #c8f3fa;
        }
      }
      button {
        color: black;
        height: 1.5rem;
        /* h 24px */
        font-weight: 600;
        margin-top: 0.5rem;
        /* 8px */
        border-radius: 0.5rem;
        /* 8px */
        outline: none;
        border: none;
        cursor: pointer;
        background-color: #ffd814;
        &:hover {
          background-color: #e7c411;
        }

        &:focus {
          outline: 1px solid #0bafc9;
        }
      }
      span {
        text-align: center;
        color: red;
      }
    }
  }
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const { user, loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, email, newPassword } = e.target;
    // validations for submit------------------------------
    if (!userName.value || !email.value || !newPassword.value) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!email.value.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (newPassword.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    // ----------------------------------------------------

    const formData = {
      id: user.nameid,
      username: userName.value,
      email: email.value,
      newPassword: newPassword.value,
    };

    dispatch(updateUserData(formData))
      .then((action) => {
        if (updateUserData.fulfilled.match(action)) {
          window.location.reload();
        } else {
          throw new Error("Error while updating user. ");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const validateInput = (inputElement) => {
    const inputValue = inputElement.value;
    if (inputValue === "") {
      inputElement.classList.add("empty-input");
      return false;
    } else {
      inputElement.classList.remove("empty-input");
      return true;
    }
  };

  return (
    <USER_PROFILE_MAIN>
      <div className="user-profile-left">
        <div className="img-box">
          <figure>
            <img src={user_profile_img} alt="user-profile-img" />
          </figure>
          <span>{user.username}</span>
        </div>
      </div>
      <div className="user-profile-right">
        <h2>Your Profile</h2>
        <span>
          You can change your profile information
          <br />
          (Please fill all fields)
        </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter new email"
            defaultValue={user.email}
            onBlur={(e) => validateInput(e.target)}
          />
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter new username"
            defaultValue={user.username}
            onBlur={(e) => validateInput(e.target)}
          />
          <label htmlFor="newPassword">Old or New Password:</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Enter new password"
            onBlur={(e) => {
              validateInput(e.target);
              if (e.target.value.length < 6) {
                e.target.classList.add("empty-input");
              } else {
                e.target.classList.remove("empty-input");
              }
            }}
          />
          <button type="submit">
            {loading ? "Loading..." : "Update Profile Info"}
          </button>
          {error ? <span>Error!</span> : ""}
        </form>
      </div>
    </USER_PROFILE_MAIN>
  );
};

export default UserProfile;
