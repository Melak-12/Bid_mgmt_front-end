import { Box, Typography,Alert } from '@mui/material'
import React from 'react'

const Privacy = () => {
  return (
    <Box sx={{ display: 'flex',paddingTop:9,}}>
    <Box component="main" sx={{ flexGrow: 1, p: 3 ,marginLeft:13,boxShadow:3,maxWidth:1300, }}>
     <Alert variant="filled" severity="info">
            <Typography variant='h5'align="center">Privacy and Policy</Typography>
    </Alert>
    <br/>
   <br/>

      <p>1. UAT/QA Test Environment: A test environment to verify the functionality and performance of the system before deployment. It should utilize mock data and set up a full appliance stack in a cloud-based setting. 
<br/>2. Development Environment: An environment to develop new features and keep track of existing functionality by using version control tools such as Github, Bitbucket etc. 
<br/>3. Staging Environment: To deploy pre-production code that resembles the production environment for testing application's behavior with real users or client devices connected to the staging environment for debugging purposes.  
<br/>4. Production Environment: This is a live production environment in which software product is released to its end user ultimately deployed on AWS (Amazon Web Services), Azure or other cloud platforms after testing is completed in QA/UAT and staging environment respectively. 
<br/>5. Quality Assurance & Monitoring Tools: Automated quality assurance (QA) solutions to provide feedback regarding an application’s health status and also reliable monitoring tools like Datadog, New Relic, Application Insights etc., can be integrated into the application for taking corrective measures in case of any unexpected behavior or poor performance reported by users during or post deployment phases respectively.</p>
    </Box>
   </Box>
  )
}

export default Privacy