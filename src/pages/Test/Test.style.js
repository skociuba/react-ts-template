import {css} from 'emotion.instance';

export const contentContainer = css`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const nestedExample = css`
  li:first-child {
    div > div {
      &:first-child {
        div:nth-child(1) {
          color: red;
        }
        div:last-child {
          color: blue;
        }
      }
      &:nth-child(2) {
        color: yellow;
      }
    }
  }
  li:not(:first-child) {
    div {
      > div {
        &:first-child {
          color: pink;
        }
      }
      &:not(:first-child) {
        &:nth-child(3) {
          color: orange;
        }
      }
    }
    div {
      &:nth-child(4) {
        color: purple;
      }
    }
  }
`;
