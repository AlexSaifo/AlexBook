import {createTheme} from '@mui/material'
import {blue , grey} from '@mui/material/colors'
import React from 'react'


export const Theme = createTheme({
    palette:{
        primary:{
          main:grey[50],  
        }
    },
    myButton:{
        backgroundColor:'red',
        color:'white',
        border:'1px solid black'
    }
})