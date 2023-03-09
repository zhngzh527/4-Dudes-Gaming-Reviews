import { styled } from 'grommet';

const useStyles = styled.div`
  .media {
    height: 0;
    padding-top: 56.25%;
    background-color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: darken;
  }

  .border {
    border: solid;
  }

  .fullHeightCard {
    height: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 15px;
    height: 100%;
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
  }

  .overlay2 {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
  }

  .grid {
    display: flex;
  }

  .details {
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }

  .title {
    padding: 0 16px;
  }

  .cardActions {
    padding: 0 16px 8px 16px;
    display: flex;
    justify-content: space-between;
  }
`;

export default useStyles;