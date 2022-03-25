import { css } from '@emotion/react'

export const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
`
// Styles for the Add Transaction component
export const headerStyle = css`
  padding: 1em;
`

export const formFieldStyle = css`
  padding: 1em;
`

export const addTrxnContainerStyle = css`
  display: flex;
  flex-direction: row;
  width: 90vw;
`

export const radioButtonStyle = css`
  padding-top: 1.5em;
`

export const addTrxnButtonStyle = css`
  padding: 1.5em 0 0 2.5em;
`

export const contentStyle = css`
    grid-row: 2;
    padding: 2em;
    `

// Styles for the Modal component
export const editTrxnContainerStyle = css`
  display: flex;
  flex-direction: row;
`

export const editTrxnRadioStyle = css`
  margin-top: 5px;
`

export const formFieldAmountStyle = css`
  max-width: 70%;
`
export const editGridStyle = css`
  margin-top: 1em;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
    "desc desc"
    "amnt merch"
    "radio radio"
    "submit cancel";
`
export const descGridAreaStyle = css`
  grid-area: desc;
`
export const amntGridAreaStyle = css`
  grid-area: amnt;
`
export const merchGridAreaStyle = css`
  grid-area: merch;
`
export const radioGridAreaStyle = css`
  grid-area: radio;
  place-items: center;
`
export const submitGridAreaStyle = css`
  grid-area: submit;
`
export const cancelGridAreaStyle = css`
  grid-area: cancel;
`
const top = 50
const left = 50

export const editModalStyle = css`
  background-color: white;
  top: ${top}% !important;
  left: ${left}% !important;
  transform: translate(-${top}%, -${left}%);
  position: absolute !important;
  width: 400px;
  border-radius: .5em;
  padding: 2em;
  box-shadow: 1px 2px 5px 0 rgba(0,0,0,0.5);
  & > div {
    background-color: transparent !important;
  }
`

// Styles for the Chart
export const chartContainerStyle = css`
  display: grid;
  place-items: left;
  width: 50%;
`

// Styles for the Data Table
export const dataTableStyle = css`
  width: 90vw !important;
`
export const editButtonStyle = css`
width: 40px;
`
