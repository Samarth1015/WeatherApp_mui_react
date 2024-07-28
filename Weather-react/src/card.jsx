import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
export default function Cardi({ info }) {
  let Hot =
    "https://plus.unsplash.com/premium_photo-1719476096371-d595d60e3b09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let cold =
    "https://images.unsplash.com/photo-1524175869111-19b0893d20b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let rainy =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
  let normal =
    "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Card sx={{ maxWidth: 345, minWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.temp <= 20
            ? info.temp <= 10
              ? cold
              : rainy
            : info.temp > 20
            ? Hot
            : normal
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name:{info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Temperature:{info.temp}</p>
          <p>FeelsLike:{info.feelsLike}</p>
          <p>Humidity:{info.humidity}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
