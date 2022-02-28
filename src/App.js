import { useState } from 'react'

// material ui'
import Box from '@mui/material/Box' 
import Tab from '@mui/material/Tab' 
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList' 
import TabPanel from '@mui/lab/TabPanel'

// screens
import Home from './screens/Home'
import Jesse from './screens/Jesse'
import Ammon from './screens/Ammon' 
import Ren from './screens/Ren' 
import Jayde from './screens/Jayde'

const App = () => {

  const [value, setValue] = useState("1")

  return (
    <Box sx={{width: '100%'}}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={(_, newValue) => setValue(newValue)} centered>
            <Tab label="Home" value="1" />
            <Tab label="Jesse" value="2" />
            <Tab label="Ammon" value="3" />
            <Tab label="Ren" value="4" />
            <Tab label="Jayde" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><Home /></TabPanel>
        <TabPanel value="2"><Jesse /></TabPanel>
        <TabPanel value="3"><Ammon /></TabPanel>
        <TabPanel value="4"><Ren /></TabPanel>
        <TabPanel value="5"><Jayde /></TabPanel>
      </TabContext>
    </Box>
  )
}


export default App;
