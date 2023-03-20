import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';

type Props = {
  name: string;
  imageName: string;
  linkName: string
}

export default function ActionAreaCard({ name,imageName,linkName }: Props) {
  return (
    <Card sx={{ maxWidth: 345 ,width: 200,overflow: 'auto'}}>
      <CardActionArea>
      <Link href={linkName}>
        <CardMedia
          component="img"
          height="140"
          image={imageName}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}