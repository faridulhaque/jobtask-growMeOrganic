import { Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { styleTwo } from "../services/styles";

interface TSingleData {
  userId: number;
  id: number;
  body: string;
  title: string;
}

type TAllData = TSingleData[];

const Table = () => {
  const [data, setData] = useState<TAllData>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  });


  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User Id",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
    },
    {
      field: "body",
      headerName: "Body",
      width: 200,
    },
  ];

  return (
    <Container component="div" sx={styleTwo.div}>
      <Box component="table" sx={styleTwo.table}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          //   checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
  );
};

export default Table;
