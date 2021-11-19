import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Paper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  margin: 20vh 5vw;
  padding: 75px 42px 64px;
  text-align: center;
  min-height: 60vh;
  border-radius: 1rem;
  box-shadow: 1px 3px 18px rgb(0 6 50);
  position: relative;

  .uno-img {
    width: 150px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

const APaper = ({ children }) => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Paper>
          <img className="uno-img" src="/imges/unoLogo.png" alt="" />
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default APaper;
