import { Button, Card, Grid, Input, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import React, { useState } from "react";

import MainService from "services/MainService";

export default function TableByMonthYear() {
  // const { rows } = authorsTableData();

  const [rows, setRows] = useState([]);
  const [yearState, setYearState] = useState();
  const [monthState, setMonthState] = useState();
  const [dayState, setDayState] = useState();

  const columns = [
    { Header: "fecha", accessor: "fecha", align: "center" },
    { Header: "est se", accessor: "est_se", align: "center", type: "float" },
    { Header: "est ne", accessor: "est_ne", align: "center", type: "float" },
    { Header: "est ce", accessor: "est_ce", align: "center", type: "number" },
    { Header: "est no", accessor: "est_no", align: "center", type: "number" },
    { Header: "est so", accessor: "est_so", align: "center", type: "number" },
    { Header: "est_no_2", accessor: "est_no_2", align: "center", type: "number" },
    { Header: "est n", accessor: "est_n", align: "center", type: "number" },
  ];

  const getByDayMonthYear = async (year, month, day) => {
    const res = await MainService.finByDayMonthYear(year, month, day);
    setRows(res.data);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getByDayMonthYear(yearState, monthState, dayState);
          }}
        >
          <Typography>Introduce el año, mes y día de los datos</Typography>
          <Input placeholder="año" type="number" onChange={(e) => setYearState(e.target.value)} />
          <Input placeholder="mes" type="number" onChange={(e) => setMonthState(e.target.value)} />
          <Input placeholder="Día" type="number" onChange={(e) => setDayState(e.target.value)} />
          <Button type="submit">Buscar</Button>
        </form>
      </Grid>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Datos por año, mes y día
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
