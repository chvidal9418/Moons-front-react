import {useCallback, useEffect, useState} from 'react'
import {Circles} from './D3Chart'
import {Box, IconButton, makeStyles} from "@material-ui/core"


function Charts() {

  const classes = useStyles()
  const [data, setData] = useState({})
  const [color, setColor] = useState(150)

  useEffect(() => {
    updateData()
  }, [])

  const formaData = (limit) => {
    let total = Math.round(Math.random() * limit)
    let limitA = Math.round(Math.random() * total)
    let limitB = total - limitA

    return {
      title: 'Revenue',
      subtitle: `${total}€`,
      dataSets: [
        {label: 'Tablet', value: limitA},
        {label: 'Smarthphone', value: limitB}
      ]
    }
  }

  const updateData = () => {
    const color = 50 + Math.round(Math.random() * 250)
    const data = formaData(Math.round(Math.random() * 30000))
    setColor(color)
    setData(data)
  }


  return (
    <Box className={classes.rootContainer}>
      <IconButton onClick={updateData}>
        <li className='bx bx-refresh'/>
      </IconButton>
      <Box className={classes.chartsContainer}>
        <Circles data={data} color={color}/>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles(theme => {
  return {
    rootContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.background.paper

    },
    chartsContainer: {
      width: '50vw',
      height: '50vh'
    }
  }
})
export default Charts
