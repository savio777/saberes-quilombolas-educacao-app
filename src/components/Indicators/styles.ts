import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0 0 0;
`;

export const Indicator = styled.View<{ full?: boolean }>`
  background-color: rgba(0, 0, 0, 0.3);
  width: ${(props) => (props.full ? "30px" : "20px")};
  height: 15px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.8);
  margin-right: 10px;
`;
