import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import Papa from "papaparse";
import MUIDataTable from "mui-datatables";
import TableService from "services/TableService";
import { toast } from "react-toastify";
// import { parse } from "csv-parse";

// eslint-disable-next-line react/prop-types
function CSVTable({ data }) {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}aa</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i + "row"}>
            {Object.values(row).map((value, j) => (
              <td key={j + " " + i + "cell"}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function UploadFile() {
  // eslint-disable-next-line no-unused-vars
  const [file, setFile] = useState([]);
  const [data, setData] = useState([]);
  const [fulldata, setFulldata] = useState([]);
  const [name, setName] = useState("");
  const [columns, setColumns] = useState([]);

  const handleSubmit = async () => {
    const res = await TableService.createTable({
      header: JSON.stringify(columns),
      data: JSON.stringify(data),
      fullData: JSON.stringify(fulldata),
      name: name,
    });

    if (res.data.id) {
      toast.success("Éxito al crear la tabla");
    }
  };

  const handleParse = (fileP) => {
    const reader = new FileReader();

    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target.result, { header: true });
      const parsedData = csv?.data;
      const tableHeader = csv.meta.fields.map((fieldName) => {
        return {
          name: fieldName,
          label: fieldName,
        };
      });
      
      // const valuesArray = 

      parsedData.map((row, ) => {
        console.log(row);
      });

      // console.log(valuesArray);

      setColumns(tableHeader);
      setFulldata(csv);
      setTimeout(() => {
        setData(parsedData);
      }, 3000);
    };

    reader.readAsText(fileP);
  };

  const handleFileChange = (e) => {
    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!["csv"].includes(fileExtension)) {
        // setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
      handleParse(inputFile);
    }
  };
  const options = {
    caseSensitive: true,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card p={2}>
        <Grid container alignContent="center">
          <Grid p={2} xs={12}>
            <Typography variant="h5">Subir un archivo</Typography>
          </Grid>
          <Grid p={2} xs={12}>
            <TextField fullWidth type="file" onChange={(e) => handleFileChange(e)} />
            {columns.length > 0 && (
              <>
                <MUIDataTable title={"Archivo"} data={data} columns={columns} options={options} />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <Grid xs={12} m={2}>
                    <TextField
                      fullWidth
                      type="text"
                      required
                      value={name}
                      label={"Nombre de tabla"}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>

                  <Grid xs={12} m={2}>
                    <Button type="submit">Guardar</Button>
                  </Grid>
                </form>
              </>
            )}
          </Grid>
        </Grid>
      </Card>
    </DashboardLayout>
  );
}
