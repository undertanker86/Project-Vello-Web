import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'


function App() {

  return (
    <>
      <h1>Hello Word</h1>
      <Typography variant="body2" color="text.secondary">H1</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
    </>
  )
}

export default App
