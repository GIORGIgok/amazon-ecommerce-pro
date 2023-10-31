import { useDispatch } from "react-redux";
import styled from "styled-components";
import { signOut } from "../../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const RESPONSIVE_DROPDOWN = styled.div`
    width: 84px;
    height: 44px;
    position: absolute;
    top: 35px;
    right: 0;
    border-radius: 4px;
    background-color: #d8d8d8;
    z-index: 300;
    box-shadow: 0 3px 6px 5px rgba(0, 0, 0, 0.8);
        span {     
            font-size: 13px;
            padding-inline: 12px;
            padding-block: 2px;
            display: block;
            color: #292929;
            font-weight: 600;
            cursor: pointer;
            &:hover {
                color: #666666;
            }
        }
        &::before {
            content: "";
            background-color: #d8d8d8;
            position: absolute;
            transform: rotate(45deg);
            width: 16px;
            height: 16px;
            top: -2px;
            right: 6px;
            z-index: -1;
        }
`

const ResponsiveDropdown = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    const handleNavigate = () => {
        push("/user/profile")
    }
    const handleSignOut = () => {
        dispatch(signOut());
    }
    
    return (
        <RESPONSIVE_DROPDOWN>
            <span onClick={handleNavigate}>Account</span>
            <span onClick={handleSignOut}>Sign out</span>
        </RESPONSIVE_DROPDOWN>
    )
}

export default ResponsiveDropdown;