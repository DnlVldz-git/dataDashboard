import {
  Box,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import TableService from "services/TableService";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import Detail from "./Detail";

const columns = [
  {
    name: "id",
    label: "Id",
    options: {
      index: true,
    },
  },
  {
    name: "name",
    label: "Name",
  },
];

export default function AllTables() {
  const [tables, setTables] = useState([]);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);

  const getTables = async () => {
    const tabs = await TableService.getAll();
    setTables(tabs.data);
  };

  useEffect(() => {
    getTables();
  }, []);

  const detailAction = async (index) => {
    const table = tables[index];
    const names = JSON.parse(table.header).map((item) => item.name);
    const res = await axios.post("http://127.0.0.1:5000/describe", {
      data: { data: JSON.parse(table.data), names: names },
    });
    if (res.status === 200) {
      setInfo(JSON.parse(res.data));

      setOpen(true);
    }
  };

  const options = {
    rowsSelected: selected,
    customToolbarSelect: (selectedRows) => {
      return (
        <Box>
          <Tooltip title="Ver Detalle">
            <IconButton
              onClick={() => {
                detailAction(selectedRows.data[0].index);
                setSelected([]);
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </Box>
      );
    },
  };

  return (
    <DashboardLayout>
      <Dialog fullWidth maxWidth="md" open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Promedios de las variables</DialogTitle>
        <DialogContent>{info && <Detail data={info} />}</DialogContent>
      </Dialog>
      <DashboardNavbar />
      <Card p={2}>
        <Grid container alignContent="center">
          <Grid p={2} xs={12}>
            <Typography variant="h5">Todas las tablas</Typography>
          </Grid>
          <Grid p={2} xs={12}>
            {tables.length > 0 && (
              <MUIDataTable title={"Archivo"} data={tables} columns={columns} options={options} />
            )}
          </Grid>
        </Grid>
      </Card>
    </DashboardLayout>
  );
}
