import { Box } from "@mui/system";
import { useState } from "react";
import { styleThree } from "../services/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type TDepArr = TDepObj[];

type TDepObj = {
  name: string;
  subDep: string[];
};

const Expand = () => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});

  const handleClick = (index: number) => {
    setOpen((prevOpen) => ({ ...prevOpen, [index]: !prevOpen[index] }));
  };

  const departments: TDepArr = [
    {
      name: "Customer Service",
      subDep: ["Support", "Customer Success"],
    },
    {
      name: "Design",
      subDep: ["Graphics Design", "Product Design", "Product Design"],
    },
  ];

  return (
    <Box component="section" sx={styleThree.section}>
      <List component="div">
        {departments.map((department, index) => (
          <div key={index}>
            <ListItem onClick={() => handleClick(index)}>
              <ListItemText primary={department.name} />
              {open[index] ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon  />
              )}
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.subDep.map((subDepartment, subIndex) => (
                  <ListItem key={subIndex} sx={{ pl: 4 }}>
                    <ListItemText primary={subDepartment} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Box>
  );
};

export default Expand;
