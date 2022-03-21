import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import React from 'react'
import { Pie, PieChart, Tooltip } from 'recharts'
import { chartContainerStyle, headerStyle } from '../../styles/index'

export function TransactionChart ({ data }) {
  const reducedData = data.reduce((acc, t) => {
    const newSum = acc[t.merchant_id] ? acc[t.merchant_id] + t.amount : t.amount

    return {
      ...acc,
      [t.merchant_id]: newSum
    }
  }, {})

  const pieData = Object.keys(reducedData).map((merchantId) => ({
    name: merchantId,
    value: reducedData[merchantId]
  }))

  return (
    <Box css={chartContainerStyle} data-testid={'transactionChart'}>
      <Typography css={headerStyle}>Pie Chart Breakdown</Typography>
      <PieChart height={400} width={1500}>
        <Pie
          cx={200}
          cy={200}
          data={pieData}
          dataKey='value'
          fill='#8884d8'
          isAnimationActive={false}
          label
          outerRadius={80}
        />
        <Tooltip />
      </PieChart>
    </Box>
  )
}

TransactionChart.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
