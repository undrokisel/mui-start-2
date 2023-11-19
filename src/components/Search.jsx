import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
    sx={{m:2}}
    fullWidth
    label="Поиск"
    variant="standard"
    type='search' 
    value={value} 
    onChange={onChange} />;

};

export default Search;