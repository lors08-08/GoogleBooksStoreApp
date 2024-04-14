import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type TProps = {
  title: string;
  category?: string[];
  author?: string[];
  image?: string;
};

export const BookItem: FC<TProps> = ({ title, category, author, image }) => {
  const categoryTitle = category?.length ? category[0] : '*no category';

  return (
    <div>
      <Card sx={{ width: 345, margin: '10px' }}>
        <CardMedia sx={{ height: 500 }} image={image} title={title} />
        <CardContent>
          {author?.length
            ? author.map((el, idx) => (
                <Typography key={idx} variant="body2" color="text.secondary">
                  {el}
                </Typography>
              ))
            : '*no author'}
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {categoryTitle}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
