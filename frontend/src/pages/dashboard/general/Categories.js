// @mui
import { Grid, Card, CardContent, Typography, Link } from '@mui/material';
// image
import CategoryImage1 from '../../../img/Category_1.png';
import CategoryImage2 from '../../../img/Category_2.png';
import CategoryImage3 from '../../../img/Category_3.png';
import CategoryImage4 from '../../../img/Category_4.png';

export default function CategoriesPage() {
  const categories = [
    { title: 'Arabic poetry', imagePath: CategoryImage1, link: '#category_1' },
    { title: 'Learning korean grammar', imagePath: CategoryImage2, link: '#category_2' },
    { title: 'Book', imagePath: CategoryImage3, link: '#category_3' },
    { title: 'Art', imagePath: CategoryImage4, link: '#category_4' },
  ];
  const popularCategories = [
    { title: 'Arabic poetry', imagePath: CategoryImage1, link: '#category_1' },
    { title: 'Learning korean grammar', imagePath: CategoryImage2, link: '#category_2' },
    { title: 'Book', imagePath: CategoryImage3, link: '#category_3' },
    { title: 'Art', imagePath: CategoryImage4, link: '#category_4' },
  ];

  return (

    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Link href={category.link} underline="none">
                <Card>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={category.imagePath}
                      alt={category.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '3/1'}}
                    />
                    <CardContent style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <Typography variant="h6" component="h2" style={{ color: 'white', fontFamily: 'Arial, san-serif' }}>
                        {category.title}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} md={8}>
        <Typography variant="subtitle1" component="h2" align="center" style={{ color: '#797777', margin: '20px 0' }}>
          Popular on Picsta
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {popularCategories.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Link href={category.link} underline="none">
                <Card>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={category.imagePath}
                      alt={category.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '3/1' }}
                    />
                    <CardContent style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                      <Typography variant="h6" component="h2" style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>
                        {category.title}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};



