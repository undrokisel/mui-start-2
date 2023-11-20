import { Close } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";

const BasketItem = ({ name, price, quantity, id, index, removeFromOrder }) => {
    return (
        <ListItem key={index}>
            <List>
                <ListItem>
                    <Typography
                        variant="body1"
                    >{index + 1}. Название: {name}</Typography>
                </ListItem>
                <ListItem>
                    <ListItemText>Цена: {price}</ListItemText>
                    <ListItemText>Количество: {quantity}</ListItemText>
                    <IconButton
                        onClick={() => removeFromOrder(id)}
                        variant="text"
                    >
                        <Close />
                    </IconButton>
                </ListItem>
            </List>
        </ListItem>
    );
};

export default BasketItem;