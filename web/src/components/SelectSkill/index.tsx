import React, { SelectHTMLAttributes, useState, useEffect } from 'react'

import {
  Chip,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
} from '@material-ui/core'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import './styles.css'

//Props do componente
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: any
  parentFunction: (st: any) => void
}

//style do select por meio dos 'Theme's no material ui
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 5,
      minWidth: '100%',
      fontWeight: 400,
      fontSize: 40,
    },
    chipControl: {
      fontSize: 15,
    },
  })
)

//o componente em si
const SelectSkill: React.FC<SelectProps> = ({
  label,
  name,
  options,
  parentFunction,
  ...rest
}) => {
  //skills selecionadas
  const [selectedSkills, setSelectedSkills] = useState([])

  const classes = useStyles()

  //o UseEffect monitora o estado de 'selectedSkills'
  //e cada vez que muda, ele executa a função dentro dele
  //essa função chama uma parentFunction passando o novo 'selectedSkills'
  useEffect(() => {
    parentFunction(selectedSkills)
  }, [selectedSkills])

  // handleChange é acionado pelo onChange do select
  // e seta o novo estado de 'SelectedSkills'
  const handleChange = (event) => {
    setSelectedSkills(event.target.value)
  }
  return (
    <div className='select-block'>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-mutiple-chip-label'>{label}</InputLabel>
        <Select
          className='select'
          multiple
          value={selectedSkills}
          onChange={handleChange}
          onMouseDown={(event) => {
            event.stopPropagation()
          }}
          input={<Input id='select-multiple-chip' />}
          renderValue={(selected: any) => (
            <div>
              {selected.map((label) => (
                <Chip
                  className={classes.chipControl}
                  key={label}
                  label={label}
                  variant='outlined'
                />
              ))}
            </div>
          )}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              value={option.name}
              className={classes.chipControl}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
export default SelectSkill
