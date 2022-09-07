import styled from "styled-components";
import { Link } from "react-router-dom";

import convertToRem from "../../utils/convertToRem";

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  p {
    font-size: ${convertToRem(24)};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  min-height: 100vh;

  padding: ${convertToRem(60)} 0;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: ${convertToRem(15)};

  color: rgba(0, 0, 0, 0.5);

  svg {
    margin-right: ${convertToRem(4)};
  }
`;

export const UserInfoContainer = styled.div`
  margin-top: ${convertToRem(48)};

  .profile {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      display: block;

      width: ${convertToRem(120)};
      height: ${convertToRem(120)};

      border-radius: 50%;
    }

    > div {
      margin-left: ${convertToRem(16)};

      h2 {
        font-size: ${convertToRem(36)};
      }

      p {
        margin-top: ${convertToRem(4)};

        color: rgba(0, 0, 0, 0.5);
        
        font-size: ${convertToRem(16)};
        line-height: 1.2;
      }
    }
  }

  .info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${convertToRem(24)};

    margin-top: ${convertToRem(48)};

    > div {
      display: flex;

      color: rgba(0, 0, 0, 0.7);

      strong {
        margin-right: ${convertToRem(8)};
      }
    }
  }
`;