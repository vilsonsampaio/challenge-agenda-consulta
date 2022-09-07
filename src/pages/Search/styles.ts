import styled from "styled-components";

import convertToRem from "../../utils/convertToRem";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  min-height: 100vh;

  padding: ${convertToRem(60)} 0;
`;

export const InputContainer = styled.form`
  display: flex;

  width: 100%;
  height: ${convertToRem(60)};

  margin-top: ${convertToRem(24)};

  background-color: #FFF;

  border-radius: ${convertToRem(6)};

  overflow: hidden;

  input {
    flex: 1;

    padding: 0 ${convertToRem(16)};
    
    background-color: transparent;
    
    font-size: ${convertToRem(16)};

    border: 0;
  }

  button {
    padding: 0 ${convertToRem(48)};

    background-color: #C92A2A;
    color: #FFF;
    
    font-weight: 700;
    font-size: ${convertToRem(15)};
    
    border: 0;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: ${convertToRem(48)};

  > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: #FFF;
    color: #212529;

    padding: ${convertToRem(24)};

    border-radius: ${convertToRem(6)};

    img {
      display: block;

      width: ${convertToRem(64)};
      height: ${convertToRem(64)};

      margin-right: ${convertToRem(16)};

      border-radius: 50%;
    }

    > div {
      display: flex;
      flex-direction: column;

      strong {
        font-size: ${convertToRem(16)};
      }

      span {
        margin-top: ${convertToRem(4)};

        font-size: ${convertToRem(14)};
        line-height: 1.25;

        color: rgba(0, 0, 0, 0.5);
      }
    }

    > svg {
      margin-left: auto;

      opacity: 0.3;
    }

    &:not(:first-child) {
      margin-top: ${convertToRem(16)};
    }
  }
`;