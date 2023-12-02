import { Box } from "@mui/system";
import { useState } from "react";
import { styleThree } from "../services/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Checkbox } from "@mui/material";

type TDepArr = TDepObj[];

type TDepObj = {
  main: TDepVal;
  subDep: TDepVal[];
};

type TDepVal = {
  name: string;
  val: number;
};

const Expand = () => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({});


  const [departments, setDepartments] = useState<TDepArr>([
    {
      main: {
        name: "Customer Service",
        val: 0,
      },
      subDep: [
        {
          name: "Support",
          val: 0,
        },
        {
          name: "Customer Success",
          val: 0,
        },
      ],
    },
    {
      main: {
        name: "Design",
        val: 0,
      },
      subDep: [
        {
          name: "Graphics Design",
          val: 0,
        },
        {
          name: "Web Design",
          val: 0,
        },
        {
          name: "Product Design",
          val: 0,
        },
      ],
    },
  ]);




  const handleClick = (index: number) => {
    setOpen((prevOpen) => ({ ...prevOpen, [index]: !prevOpen[index] }));
  };

  const handleSelectOne = (index: number, subIndex: number) => {
    const updatedDepartments = [...departments];

    if (updatedDepartments[index].subDep[subIndex].val === 0) {
      updatedDepartments[index].subDep[subIndex].val = 1;
    } else {
      updatedDepartments[index].subDep[subIndex].val = 0;
    }

    const allSubDepsSelected = updatedDepartments[index].subDep.every(
      (subDep) => subDep.val === 1
    );
    updatedDepartments[index].main.val = allSubDepsSelected ? 1 : 0;

    setDepartments(updatedDepartments);
  };

  const handleSelectAll = (index: number) => {
    const updatedDepartments = [...departments];

    updatedDepartments[index].main.val =
      updatedDepartments[index].main.val === 0 ? 1 : 0;

    updatedDepartments[index].subDep.forEach((subDep) => {
      subDep.val = updatedDepartments[index].main.val;
    });

    setDepartments(updatedDepartments);
  };

  return (
    <Box component="section" sx={styleThree.section}>
      <List component="div">
        {departments.map((department, index) => (
          <div key={index}>
            <ListItem>
              <Checkbox
                color="primary"
                checked={department.main.val === 1}
                onClick={() => handleSelectAll(index)}
              />
              <ListItemText primary={department.main.name} />
              {open[index] ? (
                <ExpandLessIcon onClick={() => handleClick(index)} />
              ) : (
                <ExpandMoreIcon onClick={() => handleClick(index)} />
              )}
            </ListItem>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.subDep.map((subDepartment, subIndex) => (
                  <ListItem key={subIndex} sx={{ pl: 4 }}>
                    <Checkbox
                      color="primary"
                      checked={subDepartment.val === 1}
                      onClick={() => handleSelectOne(index, subIndex)}
                    />
                    <ListItemText primary={subDepartment.name} />
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
