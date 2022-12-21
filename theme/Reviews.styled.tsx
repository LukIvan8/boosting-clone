import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  max-width: 385px;
  padding: 40px 0 30px;
  position: relative;
`

export const TrustpilotButton = styled.button`
  border: 1px solid #e4e5ed;
  border-radius: 4px;
  width: 70px;
  background-color: #e4e5ed;
  height: 25px;
  display: block;
  position: absolute;
  right: 60px;
  bottom: 65px;
  cursor: pointer;
`

export const Pointer = styled(Image)`
  position: absolute;
  top: -25px;
  right: -30px;
  width: 26px;
`

export const Trustpilot = styled(Image)`
  max-width: 100%;
  display: block;
`