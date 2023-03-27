import { Card, Grid, TextField, Typography } from '@mui/material';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react'
import TableService from 'services/TableService';

const columns = [
    {
        name: 'id',
        label: 'id',
    },
    {
        name: 'name',
        label: 'name',
    }
]

export default function AllTables() {
    const [tables, setTables] = useState([]);
    
    const getTables = async () => {
        const tabs = await TableService.getAll();
        setTables(tabs.data);
    }

    useEffect(() => {
        getTables();
    }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card p={2}>
        <Grid container alignContent="center">
          <Grid p={2} xs={12}>
            <Typography variant="h5">Todas las tablas</Typography>
          </Grid>
          <Grid p={2} xs={12}>
            {
                tables.length > 0 &&

          <MUIDataTable title={"Archivo"} data={tables} columns={columns}  />
            }
          </Grid>
        </Grid>
      </Card>
    </DashboardLayout>
  )
}
