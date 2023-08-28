import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { CardActionArea, Rating } from "@mui/material";

const HotelCard = (props) => {
  const navigate = useNavigate();
  const hotelDetails = props.hotel;
  const onCardClick = () => {
    console.log("Card clicked");
    navigate(`/hotel-details/${hotelDetails.slug}`);
  };
  return (
    <Card onClick={onCardClick} sx={{ maxWidth: 345, marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={hotelDetails.thumbnail}
          alt="hotel"
        />
        <CardContent>
          <Typography style={{}} gutterBottom variant="h6" component="div">
            {hotelDetails.address}
          </Typography>
          <Typography variant="body2" color="text.primary">
            ${hotelDetails.pricePerNight} night
          </Typography>
          <Rating
            name="read-only"
            value={Math.floor(hotelDetails.rating)}
            readOnly
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HotelCard;
